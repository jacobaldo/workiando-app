import { useFormik } from "formik";
import { useState } from "react";
import { CountryCode } from "react-native-country-picker-modal";
import { showMessage } from "react-native-flash-message";
import * as Yup from "yup";
import useAxiosPost from "../../services/apiPost";
import { Register } from "./types";

const useRegister = ({ login }: any) => {
  const { postData } = useAxiosPost();
  const [loading, setLoading] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<CountryCode>("PE");

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string().required("Ingresa tu nombre"),
    lastName: Yup.string().required("Ingresa tu Apellido"),
    codeNumber: Yup.string(),
    number: Yup.string().required("Ingresa numero de celular"),
    email: Yup.string().email("Correo invalido").required("Ingresa tu Correo"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Contraseña diferente")
      .required("Ingresa de nuevo la contraseña"),
  });
  const handleRegister = async (values: Register) => {
    const registerValue = {
      name: values.name,
      lastname: values.lastName,
      email: values.email,
      codeNumber: values.codeNumber,
      number: values.number,
      password: values.password,
      source: "EMAIL",
    };

    postData<any>("/auth/signup", registerValue)
      .then((res) => {
        if (res.status === 200) {
          login(res.data.user, res.data.auth);
        }
        setLoading(false);
      })
      .catch((error) => {
        showMessage({
          message: "Error",
          description: error.message ?? "Error al obtener datos del usuario",
          type: "danger",
          icon: "danger",
        });

        setLoading(false);
      });
  };

  const setDataUser = async (values: Register) => {
    setLoading(true);
    // await auth()
    //   .createUserWithEmailAndPassword(values.email, values.password)
    //   .then(async data => {
    handleRegister(values);
    //   setLoading(false);
    // })
    // .catch(e => {

    // });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      number: "",
      codeNumber: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit: (values: Register) => {
      setDataUser(values);
    },
  });

  const handleCountryChange = (country: any) => {
    formik.handleChange({
      target: {
        name: "codeNumber",
        value: `+${country.callingCode[0]}`,
      },
    });
    setCountryCode(country.cca2);
  };

  return {
    handleRegister,
    loading,
    formik,
    RegistrationSchema,
    handleCountryChange,
    countryCode,
  };
};

export default useRegister;
