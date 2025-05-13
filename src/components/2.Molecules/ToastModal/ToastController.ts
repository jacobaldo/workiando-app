import { MutableRefObject } from "react";
import { CustomModalRef, ToastPosition, ToastVariant } from "./type";

export default class ToastController {
  static modalRef: MutableRefObject<CustomModalRef>;
  static setModalRef = (ref: any) => {
    this.modalRef = ref;
  };

  static showModal = (
    text: string | React.ReactNode,
    variant?: ToastVariant,
    position?: ToastPosition,
    closeIcon?: boolean
  ) => {
    this.modalRef.current?.show(text, variant, position, closeIcon);
  };

  static hideModal = () => {
    this.modalRef.current?.hide();
  };
}
