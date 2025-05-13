import { FormEvent } from "react";

export interface Props {
  btnText?: string;
  textStyle?: any;
  type?: buttonType;
  style?: any;
  onPress?: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
}

export type buttonType =
  | "primary"
  | "primaryGreen"
  | "secondary"
  | "tertiary"
  | "default";
