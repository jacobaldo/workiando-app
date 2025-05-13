import * as ImagePicker from "expo-image-picker"; // Usamos expo-image-picker aquí
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { showMessage } from "react-native-flash-message";
import * as Yup from "yup";
import useAxiosGet from "../../../../../services/apiGet";
import useAxiosPost from "../../../../../services/apiPost";
import { MembershipAll } from "../../../../ConfigureEmploye/MembershipSheet/types";
import { Category } from "../../../../ConfigureEmploye/types";
import { CreateCategoriesProps, bodyCreate } from "./types";

export const useCreateCategories = ({ type }: CreateCategoriesProps) => {
  const [editItem, setEditItem] = useState<Category>();
  const [openBtnSheet, setOpenBtnSheet] = useState<boolean>(false);
  const [typeMembership, setTypeMembership] = useState("work");
  const [selectTab, setSelectTab] = useState("work");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { postData, loading: loadingPost } = useAxiosPost();
  const {
    data: dataCategories,
    getData,
    loading,
    refreshData,
  } = useAxiosGet<Category[]>("/category");
  const {
    data: dataTypeEmploye,
    getData: getDataEmploye,
    loading: loadingEmploye,
    refreshData: refreshDataTypeEmploye,
  } = useAxiosGet<Category[]>("/typeEmploye");
  const {
    data: dataMembership,
    getData: getDataMembership,
    loading: loadingMembership,
    refreshData: refreshMembership,
  } = useAxiosGet<MembershipAll>(`/plan/membership?type=${selectTab}`);

  const typeText = () => {
    switch (type) {
      case "category":
        return "Categoría";
      case "typeEmploye":
        return "Tipo de empleo";
      case "membership":
        return "Membresia";
      default:
        return "";
    }
  };

  const bodySetEmployesSchema = Yup.object().shape({
    name: Yup.string().required("Ingresa nombre"),
    photo: Yup.string().required("Ingresa foto"),
  });

  const bodySetEmployesSchemaM = Yup.object().shape({
    name: Yup.string().required("Ingresa nombre"),
    price: Yup.number().required("Ingresa costo de membresia"),
    duration: Yup.number().required("Ingresa cant días de membresia"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      calculableAmount: false,
    },
    validationSchema:
      type === "membership" ? bodySetEmployesSchemaM : bodySetEmployesSchema,
    onSubmit: (values: bodyCreate, { resetForm }) => {
      type === "membership"
        ? addPost({ ...values, type: typeMembership })
        : addPost(values);
      resetForm();
    },
  });

  useEffect(() => {
    type === "category" && getData();
    type === "typeEmploye" && getDataEmploye();
    type === "membership" && getDataMembership();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, selectTab]);

  const Refresh = () => {
    type === "category" && refreshData();
    type === "typeEmploye" && refreshDataTypeEmploye();
    type === "membership" && refreshMembership();
  };

  const addPost = (body: bodyCreate) => {
    postData(`/${type === "membership" ? "plan/" : ""}${type}`, body)
      .then(() => {
        showMessage({
          message: "Feliciades!!",
          description: `Registro de ${typeText()} exitoso.`,
          type: "success",
          icon: "success",
        });

        Refresh();
      })
      .catch(() => {
        showMessage({
          message: "Error!!",
          description: `Error, Registro de ${
            type === "category" ? "Categoría" : "Tipo de empleo"
          } `,
          type: "danger",
          icon: "danger",
        });
      });
  };

  const newList = () => {
    if (type === "category") {
      return dataCategories;
    }
    if (type === "typeEmploye") {
      return dataTypeEmploye;
    }
    if (type === "membership") {
      return dataMembership?.docs;
    }
    return [];
  };

  const onPressEdit = (item: Category) => {
    setEditItem(item);
    setOpenBtnSheet(true);
  };

  const toggleSwitch = (data: boolean) => {
    formik.handleChange({
      target: {
        name: "calculableAmount",
        value: data,
      },
    });
  };

  // Usando expo-image-picker para seleccionar imágenes
  const handleSelectImage = async () => {
    // Solicitar permisos para acceder a la galería
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Se necesitan permisos para acceder a la galería.");
      return;
    }

    // Abrir la galería para seleccionar una imagen
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 0.8,
    });

    if (!result.canceled && result.assets?.[0]) {
      const asset = result.assets[0];
      const base64WithPrefix = `data:image/jpeg;base64,${asset.base64}`;
      setImageUri(asset.uri); // Guardar la URI de la imagen seleccionada
      formik.setFieldValue("photo", base64WithPrefix); // Establecer el valor del campo 'photo' en Formik
      console.log("Base64:", base64WithPrefix.substring(0, 100));
    }
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
