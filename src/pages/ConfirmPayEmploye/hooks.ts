import {useState} from 'react';
import {ConfirmPayEmployeProps, DataEmploye, PostEmploye} from './types';
import {useUser} from '../../provider/AuthProvider';
import moment from 'moment';
import useAxiosPost from '../../services/apiPost';
import ToastController from '../../components/2.Molecules/ToastModal/ToastController';

// import {formatDateWithSlash} from '../../utils/formatDate.util';
// import {numberWithCommas} from '../../utils/currency/currency.utils';
// import {Subs} from '../SuscribeMembershipUser/ConfirmMembershipSheet/types';

// import {Linking} from 'react-native';
// import {NUM_ADMIN} from '../../services/api';
import {removePushEmploye} from '../../provider/pushEmploye';
import {NUM_ADMIN} from '../../services/api';
import {formatDateWithSlash} from '../../utils/formatDate.util';
import {numberWithCommas} from '../../utils/currency/currency.utils';
import {Linking} from 'react-native';

const useConfirmPayEmployes = ({
  navigation,
  data,
  admin,
}: ConfirmPayEmployeProps) => {
  const {
    authState: {user},
  } = useUser();
  // let {initAddress} = useSelector((store: any) => store?.data);
  const [payMetod, setPayMetod] = useState('yape');
  const [termCondition, setTermCondition] = useState(false);
  const {postData, loading} = useAxiosPost();
  const addDays = (days: number) => {
    return moment(new Date()).add(days, 'days').toDate();
  };

  const navigateModal = async () => {
    const registerWorkValue = {
      title: data?.position,
      admin: user && user._id,
      category: data?.idCategory,
      typeEmploye: data?.idEmploye,
      idMembership: data?.idMembership,
      description: data?.description,
      workType: 'service',
      contact: admin
        ? {name: data.nameuserJob, phone: data.phoneuserJob}
        : null,
      date: {
        dateExpired: addDays(data?.membership?.duration ?? 0),
      },
      price: data?.salary && data?.salary?.length > 0 ? data?.salary : 0,

      location: {
        latitude: data?.latitude,
        longitude: data?.longitude,
        address: data?.formatted_address,
      },
    };

    if (loading) {
      return;
    }

    try {
      const response = await postData<PostEmploye>('/works', registerWorkValue);

      if (response.status === 200) {
        ToastController.showModal(
          'Se registró correctamente',
          {type: 'success'},
          'top',
          true,
        );

        await removePushEmploye();
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
        sendToWhatsAppNumber(response?.data?.data, NUM_ADMIN);
      }
    } catch (error: any) {
      // Manejo de errores si algo falla
      ToastController.showModal(
        error?.message ?? 'Ocurrió un error inesperado',
        {type: 'danger'},
        'top',
        true,
      );
    }
  };
  const sendToWhatsAppNumber = async (
    datasend: DataEmploye,
    phoneNumber: string,
  ) => {
    try {
      const voucherMessage = `
      🎟️ **SOLICITUD DE NUEVO ANUNCIO**
      🔑 Código de anuncio : ${datasend?.paymentCode}
      💳 **Método de pago**: Yape
      📅 **Fecha de publicación**: ${formatDateWithSlash(
        datasend.createdAt.toString(),
      )}
      💵 **Monto abonado**: S/ ${numberWithCommas(datasend.idMembership.price)}
      👤 **Cliente**: ${user?.name} ${user?.lastname}
      🏅 **Membresía solicitada**: ${datasend.idMembership.name}
      🗓️ **Duración**: ${datasend.idMembership.duration} dias )
      📞 **Teléfono de contacto**: ${user?.codeNumber} ${user?.number}
      ----------------------------------
      💡 **Gracias, espero su pronta respuesta!**
      `;
      const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        voucherMessage,
      )}`;
      Linking.openURL(url);
    } catch (error) {
      console.error('Error al enviar mensaje a WhatsApp:', error);
    }
  };
  const navigateTerm = () => {
    navigation.navigate('TermsAndConditions', {navigation});
  };

  return {
    payMetod,
    setPayMetod,
    termCondition,
    setTermCondition,
    navigateTerm,
    loading,
    navigateModal,
  };
};
export default useConfirmPayEmployes;
