import React from "react";

export type CustomModalRef = {
  show: (
    text: string | React.ReactNode,
    variant?: ToastVariant,
    position?: ToastPosition,
    closeIcon?: boolean
  ) => void;
  hide: () => void;
};

export type ToastVariant =
  | { type: "default" }
  | { type: "info" }
  | { type: "danger" }
  | { type: "success" };

export type ToastPosition = "top" | "bottom";
