import React from "react";
import { useSelector } from "react-redux";
import TestModal from "../../../features/sandbox/TestModal.jsx";
import LoginForm from "../../../features/auth/LoginForm";

export default function ModalManager() {
  const modalLookup = {
    TestModal,
    LoginForm,
  };
  const currentModal = useSelector((state) => state.modal);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
}
