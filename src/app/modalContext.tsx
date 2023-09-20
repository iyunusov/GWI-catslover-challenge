import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import React, { Component, Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

const ModalContext = createContext<{
  showModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalContent: ReactNode;
  setModalContent: Dispatch<SetStateAction<ReactNode>>;
}>({
  showModal: false,
  openModal: () => {},
  closeModal: () => {},
  modalContent: <></>,
  setModalContent: () => {},
});

export default ModalContext;

export function ModalContextProvider ({ children }: { children: EmotionJSX.Element }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(<></>);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <ModalContext.Provider value={{ showModal, openModal, closeModal, modalContent, setModalContent }}>
      {children}
    </ModalContext.Provider>
  )  
}