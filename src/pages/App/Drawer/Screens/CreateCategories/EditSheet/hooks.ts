import * as ImagePicker from "expo-image-picker"; // Importar expo-image-picker
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { showMessage } from "react-native-flash-message";
import * as Yup from "yup";
import useAxiosPut from "../../../../../../services/apiPut";
import { bodyCreate } from "../types";
import { EditSheetProps } from "./types";

export const useEditSheet = ({
  item,
  setIsOpen,
  type,
  Refresh,
}: EditSheetProps) => {
  const { putData } = useAxiosPut();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageB64, setImageB64] = useState<string | null>(null);

  const bodySetEmployesSchema = Yup.object().shape({
    name: Yup.string().required("Ingresa nombre"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      calculableAmount: false,
    },
    validationSchema: bodySetEmployesSchema,
    onSubmit: (values: bodyCreate, { resetForm }) => {
      const body = imageB64
        ? {
            ...values,
            photo: imageB64,
          }
        : { ...values };
      EditPut(body);
      resetForm();
    },
  });

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      name: item.name,
      calculableAmount: item.calculableAmount,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  const EditPut = (body: bodyCreate) => {
    putData(`/${type}/${item._id}`, body)
      .then(() => {
        showMessage({
          message: "Felicitaciones!!",
          description: `Actualizacíon de ${
            type === "category" ? "Categoría" : "Tipo de empleo"
          } exitoso.`,
          type: "success",
          icon: "success",
        });

        setIsOpen(false);
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

        setIsOpen(false);
      });
  };

  const toggleSwitch = (data: boolean) => {
    formik.handleChange({
      target: {
        name: "calculableAmount",
        value: data,
      },
    });
  };

  // Usar Expo ImagePicker
  const handleSelectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      showMessage({
        message: "Error!!",
        description: "Permiso de galería no otorgado",
        type: "danger",
        icon: "danger",
      });

      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.8,
    });

    if (!result.canceled && result.assets?.[0]) {
      const { uri, base64, type, mimeType } = result.assets[0];
      // const mimeType = result.type || "image/jpeg";
      const base64WithPrefix = `data:${mimeType};base64,${base64}`;
      setImageUri(uri);
      setImageB64(base64WithPrefix);
    }
    if (!result.canceled && result.assets?.[0]) {
      const asset = result.assets[0];
      const base64WithPrefix = `data:image/jpeg;base64,${asset.base64}`;
      setImageUri(asset.uri); // Guardar la URI de la imagen seleccionada
      formik.setFieldValue("photo", base64WithPrefix); // Establecer el valor del campo 'photo' en Formik
      console.log("Base64:", base64WithPrefix.substring(0, 100));
    }
  };

  return {
    formik,
    toggleSwitch,
    handleSelectImage,
    imageUri,
  };
};
