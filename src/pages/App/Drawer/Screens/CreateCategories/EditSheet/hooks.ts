import * as Yup from 'yup';
import {useFormik} from 'formik';
import {EditSheetProps} from './types';
import useAxiosPut from '../../../../../../services/apiPut';
import {bodyCreate} from '../types';
import ToastController from '../../../../../../components/2.Molecules/ToastModal/ToastController';
import {useEffect, useState} from 'react';
import {requestGalleryPermissions} from '../../../../../../utils/photoPermission';
import {launchImageLibrary} from 'react-native-image-picker';
export const useEditSheet = ({
  item,
  setIsOpen,
  type,
  Refresh,
}: EditSheetProps) => {
  const {putData} = useAxiosPut();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageB64, setImageB64] = useState<string | null>(null);

  const bodySetEmployesSchema = Yup.object().shape({
    name: Yup.string().required('Ingresa nombre'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      calculableAmount: false,
    },
    validationSchema: bodySetEmployesSchema,
    onSubmit: (values: bodyCreate, {resetForm}) => {
      const body = imageB64
        ? {
            ...values,
            photo: imageB64,
          }
        : {...values};
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
        ToastController.showModal(
          `Actualizacíon de ${
            type === 'category' ? 'Categoría' : 'Tipo de empleo'
          } exitoso.`,
          {type: 'success'},
          'top',
          true,
        );
        setIsOpen(false);
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
        setIsOpen(false);
      });
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
          setImageB64(base64WithPrefix);
        }
      },
    );
  };

  return {
    formik,
    toggleSwitch,
    handleSelectImage,
    imageUri,
  };
};
