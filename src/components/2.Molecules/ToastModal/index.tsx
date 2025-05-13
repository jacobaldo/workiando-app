import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, {
  forwardRef,
  JSX,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../../constants/colors";
import { styles, stylesPosition, stylesVariant } from "./style";
import ToastController from "./ToastController";
import { CustomModalRef, ToastPosition, ToastVariant } from "./type";

const ToastModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState<string | JSX.Element>("");
  const [variant, setVariant] = useState<ToastVariant>({ type: "info" });
  const [potision, setPosition] = useState<ToastPosition>("top");
  const [closeIcon, setCloseIcon] = useState<boolean>(true);
  const modalRef = useRef<CustomModalRef>(null);

  const getIcon = () => {
    switch (variant.type) {
      case "info":
        return <Feather name="triangle" color={colors.white} size={20} />;
      case "success":
        return <Feather name="check-circle" color={colors.white} size={20} />;
      case "danger":
        return <Feather name="x-octagon" color={colors.white} size={20} />;
      default:
        return <Feather name="x-circle" color={colors.white} size={20} />;
    }
  };
  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 7000);
  };
  useLayoutEffect(() => {
    ToastController.setModalRef(modalRef);
  }, []);
  useImperativeHandle(
    modalRef,
    () => ({
      show: (
        value: string | JSX.Element,
        v?: ToastVariant,
        p?: ToastPosition,
        c?: boolean
      ) => {
        showModal();
        setText(value);
        setVariant(v ?? variant);
        setPosition(p ?? potision);
        setCloseIcon(c ?? closeIcon);
      },
      hide: () => {
        setModalVisible(false);
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    // SI DESEA SOLO TRABAJAR CON MODAL DE REACT NATIVE
    // <Modal transparent visible={modalVisible}>
    //   <SafeAreaView style={{marginHorizontal: 16}}>

    <Modal
      animationIn={potision === "top" ? "fadeInDown" : "fadeInUp"}
      animationOut={"fadeOut"}
      isVisible={modalVisible}
      style={stylesPosition[potision]}
      hasBackdrop={false}
      coverScreen={false}
    >
      <SafeAreaView>
        <View
          style={{
            ...styles.snackbar,
            ...stylesVariant[variant.type],
          }}
        >
          <View style={styles.snackContent}>
            <View style={styles.boxText}>
              {getIcon()}
              <Text style={styles.text}>{text}</Text>
            </View>
            {closeIcon && (
              <Pressable onPress={() => setModalVisible(false)}>
                <MaterialIcons name="close" size={20} color={colors.white} />
              </Pressable>
            )}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default forwardRef(ToastModal);
