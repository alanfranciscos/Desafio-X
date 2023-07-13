import { useEffect, useState } from "react";

import { Container, ModalContent } from "./styles";

import { FaPen } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";

type CoordinatesType = {
  x: number;
  y: number;
};

export const Modal = ({
  closeModal,
  coordinates,
  actionButton,
}: {
  closeModal: Function;
  coordinates: CoordinatesType;
  actionButton: {
    edit: Function;
    delete: Function;
  } | null;
}) => {
  const [modal, setModal] = useState(document?.getElementById("modal"));

  useEffect(() => {
    setModal(document?.getElementById("modal-options"));
  }, []);

  const verifyWidthOfModal = () => {
    const modalWidth = document?.querySelector("#modal-content")?.clientWidth;
    if (modalWidth === undefined || modalWidth === null) return -15;
    return modalWidth;
  };

  const [editIsOpen, setEditIsOpen] = useState(false);
  const [deletIsOpen, setDeletIsOpen] = useState(false);

  return (
    <Container
      id="modal-options"
      onClick={(event) => {
        if (event.target === modal && modal) {
          closeModal();
        }
      }}
    >
      {!editIsOpen && !deletIsOpen ? (
        <ModalContent
          id="modal-content"
          style={{
            opacity: verifyWidthOfModal() === -15 ? "0" : "1",
            top: coordinates?.y,
            left: coordinates?.x - verifyWidthOfModal(),
          }}
        >
          <button
            onClick={() => {
              actionButton?.edit();
              setEditIsOpen(true);
            }}
          >
            <FaPen />
            <span>Editar</span>
          </button>
          <button
            onClick={() => {
              actionButton?.delete();
              setDeletIsOpen(true);
            }}
          >
            <IoMdTrash />
            <span>Excluir</span>
          </button>
        </ModalContent>
      ) : (
        <>
          {setEditIsOpen(false)}
          {setDeletIsOpen(false)}
          {closeModal()}
        </>
      )}
    </Container>
  );
};
