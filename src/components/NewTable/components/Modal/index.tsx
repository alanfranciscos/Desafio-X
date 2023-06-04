import { useEffect, useState } from "react";

import { Container, ModalContent } from "./styles";

import { FaPen } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { RegisterCliet } from "../../../RegisterClient";
import { CLIENTS_API } from "../../../../services/api";
import { useQuery } from "react-query";
import { cnpjToNumbers } from "../../../../utils/cnpj";

type CoordinatesType = {
  x: number;
  y: number;
};

export const Modal = ({
  closeModal,
  coordinates,
  id,
}: {
  closeModal: Function;
  coordinates: CoordinatesType;
  id: string;
}) => {
  const [modal, setModal] = useState(document?.getElementById("modal"));

  useEffect(() => {
    setModal(document?.getElementById("modal-options"));
  }, []);

  const { data, isLoading, isFetching, isError } = useQuery(
    ["clients", id],
    async () => {
      const { data } = await CLIENTS_API.getPerCNPJ(cnpjToNumbers(id));
      return data;
    }
  );

  const verifyWidthOfModal = () => {
    const modalWidth = document?.querySelector("#modal-content")?.clientWidth;
    if (modalWidth === undefined || modalWidth === null) return -15;
    return modalWidth;
  };

  const [editIsOpen, setEditIsOpen] = useState(false);

  const editClient = () => {
    if (editIsOpen) {
      return (
        <RegisterCliet
          modalIsOpen
          setModalIsOpen={setEditIsOpen}
          title="Editar Cliente"
          placeholder={{
            cnpj: data?.cnpj,
            email: data?.email,
            name: data?.nome,
            phone: data?.telefone,
            state: data?.estado,
            location: [data?.location?.x, data?.location?.y],
          }}
        />
      );
    }
    return null;
  };

  return (
    <Container
      id="modal-options"
      onClick={(event) => {
        if (event.target === modal && modal) {
          closeModal();
        }
      }}
    >
      {editClient()}
      <ModalContent
        id="modal-content"
        style={{
          opacity: verifyWidthOfModal() === -15 ? "0" : "1",
          top: coordinates?.y,
          left: coordinates?.x - verifyWidthOfModal(),
        }}
      >
        <button onClick={() => setEditIsOpen(true)}>
          <FaPen />
          <span>Editar</span>
        </button>
        <button>
          <IoMdTrash />
          <span>Excluir</span>
        </button>
      </ModalContent>
    </Container>
  );
};
