import { Linking } from "react-native";

import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useUser } from "../../../provider/AuthProvider";
import { NUM_ADMIN } from "../../../services/api";
import useAxiosPost from "../../../services/apiPost";
import { numberWithCommas } from "../../../utils/currency/currency.utils";
import { formatDateWithSlash } from "../../../utils/formatDate.util";
import { ConfirmProps, Subs } from "./types";

const useConfirmMembershipSheet = ({
  navigation,
  membership,
  setIsOpenFilter,
}: ConfirmProps) => {
  const {
    authState: { user },
  } = useUser();
  const { postData, loading } = useAxiosPost();
  const [payMetod, setPayMetod] = useState("yape");
  const [termCondition, setTermCondition] = useState(false);
  const sendWhatsAppMessage = () => {
    const body = {
      user: user?._id,
      plan: membership._id,
      date: { startDate: Date.now(), endDate: Date.now() },
      type: "user",
    };
    // sendToWhatsAppNumber('res?.data?.voucher', '51931588227');
    postData<Subs>("plan/subscription", body)
      .then((res) => {
        if (res.status === 200) {
          showMessage({
            message: "Felicitaciones!!",
            description: "Su solicitud se registró exitoso.",
            type: "success",
            icon: "success",
          });

          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
          sendToWhatsAppNumber(res?.data, NUM_ADMIN);
        }
      })
      .catch((error) => {
        showMessage({
          message: "Error!!",
          description:
            error.message ??
            `Error de solicitud de membresia'
        } `,
          type: "danger",
          icon: "danger",
        });
      });
    setIsOpenFilter(false);
  };

  const sendToWhatsAppNumber = async (data: Subs, phoneNumber: string) => {
    try {
      const voucherMessage = `
      🎟️ **SOLICITUD VAUCHER DE MEMBRESÍA**
      🔑 Código de pago : ${data.subscription.paymentCode}
      💳 **Método de pago**: Tarjeta de Crédito
      📅 **Fecha de pago**: ${formatDateWithSlash(
        data.subscription.createdAt.toString()
      )}
      💵 **Monto abonado**: S/ ${numberWithCommas(data.membership.price)}
      👤 **Cliente**: ${user?.name} ${user?.lastname}
      🏅 **Membresía solicitada**: ${data.membership.name}
      🗓️ **Duración**: ${data.membership.duration} dias )
      📞 **Teléfono de contacto**: ${user?.codeNumber} ${user?.number}
      ----------------------------------
      💡 **Gracias, espero su pronta respuesta!**
      `;
      const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        voucherMessage
      )}`;
      Linking.openURL(url);
    } catch (error) {
      console.error("Error al enviar mensaje a WhatsApp:", error);
    }
  };

  const navigateTerm = () => {
    navigation.navigate("TermsAndConditions", { navigation });
  };
  return {
    sendWhatsAppMessage,
    loading,
    payMetod,
    setPayMetod,
    termCondition,
    setTermCondition,
    navigateTerm,
  };
};

export default useConfirmMembershipSheet;
