import {useEffect, useState} from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {Edit, EditProfileProps} from './types';
import {useUser} from '../../provider/AuthProvider';
import useAxiosPut from '../../services/apiPut';

const useEditProfile = ({navigation}: EditProfileProps) => {
  const {
    authState: {user, token},
    login,
  } = useUser();
  const {data, putData} = useAxiosPut();
  const [loading, setLoading] = useState<boolean>(false);
  // const [countryCode, setCountryCode] = useState<CountryCode>('PE');

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string().required('Ingresa tu nombre'),
    lastName: Yup.string().required('Ingresa tu Apellido'),
    number: Yup.string().required('Ingresa numero de celular'),
    documentType: Yup.string().required('Ingresa tipo de documento'),
    documentNumber: Yup.string().required('Ingresa numero de Documento'),
  });
  const handleRegister = async (values: Edit) => {
    const editValue = {
      name: values.name,
      lastname: values.lastName,
      number: values.number,
      document: {
        type: values.documentType,
        number: values.documentNumber,
      },
    };

    putData(`/auth/${user?._id}`, editValue)
      .then(() => {
        setLoading(false);
        navigation.goBack();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const setDataUser = async (values: Edit) => {
    setLoading(true);
    handleRegister(values);
  };

  const formik = useFormik({
    initialValues: {
      name: user?.name ?? '',
      lastName: user?.lastname ?? '',
      email: user?.email ?? '',
      number: user?.number ?? '',
      codeNumber: '+51',
      documentType: user?.document.type ?? 'dni',
      documentNumber: user?.document.number ?? '',
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values: Edit) => {
      setDataUser(values);
    },
  });

  // const handleCountryChange = (country: any) => {
  //   formik.handleChange({
  //     target: {
  //       name: 'codeNumber',
  //       value: country.callingCode[0],
  //     },
  //   });
  //   setCountryCode(country.cca2);
  // };
  useEffect(() => {
    if (data && token) {
      login(data, token);
    }
  }, [data]);
  // console.log('too', token);

  return {
    handleRegister,
    loading,
    formik,
    RegistrationSchema,
    // handleCountryChange,
    // countryCode,
    user,
  };
};

export default useEditProfile;
