import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useEffect, useState} from 'react';
import {Category, ConfigureEmployeProps, bodyCreate} from './types';
import useAxiosGet from '../../services/apiGet';
import {useSelector} from 'react-redux';
import {Membership, MembershipAll} from './MembershipSheet/types';
import {getPushEmploye, setPushEmploye} from '../../provider/pushEmploye';
import ToastController from '../../components/2.Molecules/ToastModal/ToastController';
import useAxiosPut from '../../services/apiPut';
import moment from 'moment';

const useConfigureEmployes = ({
  navigation,
  data: dataProps,
  admin,
}: ConfigureEmployeProps) => {
  const {
    data: dataCategories,
    getData,
    loading,
  } = useAxiosGet<Category[]>('/category');
  const {putData, loading: loadingPut} = useAxiosPut();
  let {initAddress} = useSelector((store: any) => store?.data);

  const {
    data: dataTypeEmploye,
    getData: getDataEmploye,
    loading: loadingEmploye,
  } = useAxiosGet<Category[]>('/typeEmploye');
  const {
    data: membership,
    getData: getMembership,
    loading: loadingMembership,
  } = useAxiosGet<MembershipAll>('/plan/membership');

  const [openBtnSheet, setOpenBtnSheet] = useState<boolean>(false);
  const [openEmployeSheet, setOpenEmployeBtnSheet] = useState<boolean>(false);
  const [openLocationSheet, setOpenLocationSheet] = useState<boolean>(false);
  const [address, setAddress] = useState(initAddress);
  const [quantity, setQuantity] = useState(1);
  const [dataLocation, setDataLocation] = useState<any>();
  const [openMembershipSheet, setOpenMembershipBtnSheet] =
    useState<boolean>(false);
  const [body, setBody] = useState<bodyCreate>();
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const getEmployeAsync = async () => {
    const location: bodyCreate = dataProps ? dataProps : await getPushEmploye();
    if (location && location != null) {
      formik.setFieldValue('position', location.position);
      formik.setFieldValue('description', location.description);
      formik.setFieldValue('salary', location.salary);
      formik.setFieldValue('idCategory', location.idCategory);
      formik.setFieldValue('categorySelect', location.categorySelect);
      formik.setFieldValue('idEmploye', location.idEmploye);
      formik.setFieldValue('typeEmploye', location.typeEmploye);
      formik.setFieldValue('idMembership', location.idMembership);
      formik.setFieldValue('calculableAmount', location.calculableAmount);
      formik.setFieldValue('membership', location?.membership);
      setQuantity(location?.quantity ?? 1);
    }
    if (!location?.membership) {
      getMembership();
    }
  };
  const MembershipSchema = Yup.object().shape({
    _id: Yup.string().required('El ID es requerido'),
    name: Yup.string().required('El nombre es requerido'),
    price: Yup.number()
      .required('El precio es requerido')
      .min(0, 'El precio no puede ser negativo'),
    duration: Yup.number()
      .required('La duración es requerida')
      .min(1, 'La duración debe ser al menos 1'),
    __v: Yup.number().required(),
    createdAt: Yup.date().required('La fecha de creación es requerida'),
    updatedAt: Yup.date().required('La fecha de actualización es requerida'),
  });

  const bodySetEmployesSchema = (admin: boolean) =>
    Yup.object().shape({
      position: Yup.string().required('Ingresa posicion'),
      description: Yup.string().required('Ingresa la descrition'),
      salary: Yup.string().optional().label('Ingresa salario'),
      idCategory: Yup.string(),
      categorySelect: Yup.string().required('Selecciona categoria'),
      idEmploye: Yup.string(),
      typeEmploye: Yup.string().required('Ingresa posicion'),
      idMembership: Yup.string().required('Selecciona Membresia'),
      calculableAmount: Yup.string().required('Selecciona monto calculable'),
      membership: MembershipSchema.required('Selecciona Membresia'),
      nameuserJob: Yup.string().when([], {
        is: () => admin, // 👈 Verifica el valor de `admin`
        then: Yup.string().required('Ingresa nombre de usuario'),
        otherwise: Yup.string().nullable(),
      }),
      phoneuserJob: Yup.string().when([], {
        is: () => admin,
        then: Yup.string().required('Ingresa teléfono de usuario'),
        otherwise: Yup.string().nullable(),
      }),
    });
  const formik = useFormik({
    initialValues: {
      position: '',
      description: '',
      salary: '',
      idCategory: '',
      categorySelect: '',
      idEmploye: '',
      typeEmploye: '',
      idMembership: '',
      calculableAmount: false,
      membership: null,
      nameuserJob: '',
      phoneuserJob: '',
      quantity: 1,
    },
    validationSchema: bodySetEmployesSchema(admin ?? false),
    onSubmit: async (values: bodyCreate) => {
      const data = {...values, ...address, quantity: quantity};
      if (dataProps) {
        handleEditEmploye(data);
      } else {
        navigation.navigate('ConfirmPayEmploye', {
          data: data,
          navigation: navigation,
          admin: admin,
        });
        await setPushEmploye(values);
        setBody(values);
      }
    },
  });

  const selectCategory = async (selected: any) => {
    setOpenBtnSheet(false);
    await formik.setFieldValue('categorySelect', selected.name, true);
    await formik.setFieldValue('idCategory', selected._id, true);
  };
  const handleOpenEmployeSheet = () => {
    if (!membership) {
      getMembership();
    }
    setOpenMembershipBtnSheet(true);
  };
  const selectEmploye = async (selected: Category) => {
    setOpenEmployeBtnSheet(false);
    // setActive(selected.calculableAmount ?? false);
    await formik.setFieldValue(
      'calculableAmount',
      selected.calculableAmount,
      true,
    );
    await formik.setFieldValue('typeEmploye', selected.name, true);
    await formik.setFieldValue('idEmploye', selected._id, true);

    if (!selected.calculableAmount)
      await formik.setFieldValue('salary', 0, true);
  };

  const onConfigLocation = () => {
    setOpenLocationSheet(true);
    // navigation.navigate('LocationList');
  };
  useEffect(() => {
    if (membership?.docs && membership?.docs?.length > 0) {
      // setSelectMembership(membership?.docs[0]);
      formik.handleChange({
        target: {
          name: 'idMembership',
          value: membership.docs[0]._id,
        },
      });
      formik.handleChange({
        target: {
          name: 'membership',
          value: membership.docs[0],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [membership]);
  useEffect(() => {
    getData();
    getDataEmploye();
    getEmployeAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const usePlaceSelect = (data: any, details: any) => {
    setSelectedLocation(details);
  };
  const pressSelectMembership = (selected: Membership) => {
    setOpenMembershipBtnSheet(false);

    formik.handleChange({
      target: {
        name: 'idMembership',
        value: selected._id,
      },
    });
    formik.handleChange({
      target: {
        name: 'membership',
        value: selected,
      },
    });
  };
  const addDays = (days: number) => {
    return moment(new Date()).add(days, 'days').toDate();
  };
  const handleEditEmploye = async (valuesExtern: any) => {
    const updateBody = {
      title: valuesExtern?.position,
      category: valuesExtern?.idCategory,
      typeEmploye: valuesExtern?.idEmploye,
      idMembership: valuesExtern?.idMembership,
      description: valuesExtern?.description,
      date: {
        dateExpired: addDays(valuesExtern?.membership?.duration ?? 0),
      },
      price:
        valuesExtern?.salary && valuesExtern?.salary?.length > 0
          ? valuesExtern?.salary
          : 0,
      location: {
        latitude: initAddress?.latitude,
        longitude: initAddress?.longitude,
        address: initAddress?.formatted_address,
      },
      quantity: quantity,
    };

    if (loadingPut) {
      return;
    }
    console.log('enviand', updateBody);

    putData(`/works/${dataProps?._id}`, updateBody)
      .then(() => {
        navigation.goBack();
        ToastController.showModal(
          'Se Actualizó correctamente',
          {type: 'success'},
          'top',
          true,
        );
      })
      .catch(() => {
        ToastController.showModal(
          'Error al Actualizar',
          {type: 'danger'},
          'top',
          true,
        );
      });
  };
  return {
    formik,
    body,
    loading,
    dataCategories,
    dataTypeEmploye,
    openEmployeSheet,
    setOpenEmployeBtnSheet,
    loadingEmploye,
    openBtnSheet,
    setOpenBtnSheet,
    selectCategory,
    selectEmploye,
    usePlaceSelect,
    selectedLocation,
    onConfigLocation,
    membership,
    openMembershipSheet,
    setOpenMembershipBtnSheet,
    handleOpenEmployeSheet,
    loadingMembership,
    pressSelectMembership,
    loadingPut,
    openLocationSheet,
    setOpenLocationSheet,
    dataLocation,
    setDataLocation,
    address,
    setAddress,
    setQuantity,
    quantity,
  };
};
export default useConfigureEmployes;
