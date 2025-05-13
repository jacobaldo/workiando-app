import {useEffect, useState} from 'react';
import {CreateCategoriesProps, bodyCreate} from './types';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import useAxiosGet from '../../../../../services/apiGet';
import {Category} from '../../../../ConfigureEmploye/types';
import useAxiosPost from '../../../../../services/apiPost';
import ToastController from '../../../../../components/2.Molecules/ToastModal/ToastController';
import {MembershipAll} from '../../../../ConfigureEmploye/MembershipSheet/types';
import {requestGalleryPermissions} from '../../../../../utils/photoPermission';
import {launchImageLibrary} from 'react-native-image-picker';

export const useCreateCategories = ({type}: CreateCategoriesProps) => {
  const [editItem, setEditItem] = useState<Category>();
  const [openBtnSheet, setOpenBtnSheet] = useState<boolean>(false);
  const [typeMembership, setTypeMembership] = useState('work');
  const [selectTab, setSelectTab] = useState('work');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const {postData, loading: loadingPost} = useAxiosPost();
  const {
    data: dataCategories,
    getData,
    loading,
    refreshData,
  } = useAxiosGet<Category[]>('/category');
  const {
    data: dataTypeEmploye,
    getData: getDataEmploye,
    loading: loadingEmploye,
    refreshData: refreshDataTypeEmploye,
  } = useAxiosGet<Category[]>('/typeEmploye');
  const {
    data: dataMembership,
    getData: getDataMembership,
    loading: loadingMembership,
    refreshData: refreshMembership,
  } = useAxiosGet<MembershipAll>(`/plan/membership?type=${selectTab}`);
  const typeText = () => {
    switch (type) {
      case 'category':
        return 'Categoría';
      case 'typeEmploye':
        return 'Tipo de empleo';
      case 'membership':
        return 'Membresia';
      default:
        return '';
    }
  };
  const bodySetEmployesSchema = Yup.object().shape({
    name: Yup.string().required('Ingresa nombre'),
    photo: Yup.string().required('Ingresa foto'),
  });
  const bodySetEmployesSchemaM = Yup.object().shape({
    name: Yup.string().required('Ingresa nombre'),
    price: Yup.number().required('Ingresa costo de membresia'),
    duration: Yup.number().required('Ingresa cant dias de mebresia'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      calculableAmount: false,
    },
    validationSchema:
      type === 'membership' ? bodySetEmployesSchemaM : bodySetEmployesSchema,
    onSubmit: (values: bodyCreate, {resetForm}) => {
      type === 'membership'
        ? addPost({...values, type: typeMembership})
        : addPost(values);
      resetForm();
    },
  });

  useEffect(() => {
    type === 'category' && getData();
    type === 'typeEmploye' && getDataEmploye();
    type === 'membership' && getDataMembership();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, selectTab]);

  const Refresh = () => {
    type === 'category' && refreshData();
    type === 'typeEmploye' && refreshDataTypeEmploye();
    type === 'membership' && refreshMembership();
  };
  const addPost = (body: bodyCreate) => {
    postData(`/${type === 'membership' ? 'plan/' : ''}${type}`, body)
      .then(() => {
        ToastController.showModal(
          `Registro de ${typeText()} exitoso.`,
          {type: 'success'},
          'top',
          true,
        );
        Refresh();
      })
      .catch(() => {
        ToastController.showModal(
          `Error, Registro de ${
            type === 'category' ? 'Categoría' : 'Tipo de empleo'
          } `,
          {type: 'danger'},
          'top',
          true,
        );
      });
  };
  const newList = () => {
    if (type === 'category') {
      return dataCategories;
    }
    if (type === 'typeEmploye') {
      return dataTypeEmploye;
    }
    if (type === 'membership') {
      return dataMembership?.docs;
    }
    return [];
  };
  const onPressEdit = (item: Category) => {
    // console.log('eeee', item);
    setEditItem(item);
    setOpenBtnSheet(true);
  };
  const toggleSwitch = (data: boolean) => {
    formik.handleChange({
      target: {
        name: 'calculableAmount',
        value: data,
      },
    });
  };
  const handleSelectImage = async () => {
    const hasPermission = await requestGalleryPermissions();
    if (!hasPermission) return;

    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.8,
      },
      response => {
        const asset = response.assets?.[0];

        if (asset?.base64 && asset?.uri) {
          const mimeType = asset.type || 'image/jpeg';
          const base64WithPrefix = `data:${mimeType};base64,${asset.base64}`;
          setImageUri(asset.uri);
          formik.setFieldValue('photo', base64WithPrefix); // ✅ lo seteas con el prefijo correcto
          console.log('Base64:', base64WithPrefix.substring(0, 100));
        }
      },
    );
  };
  return {
    loading,
    loadingEmploye,
    Refresh,
    formik,
    newList,
    setEditItem,
    editItem,
    openBtnSheet,
    setOpenBtnSheet,
    onPressEdit,
    toggleSwitch,
    loadingMembership,
    typeText,
    typeMembership,
    setTypeMembership,
    selectTab,
    setSelectTab,
    handleSelectImage,
    imageUri,
    loadingPost,
  };
};
