import { useEffect, useState } from "react";

import { Container, ModalContent } from "./styles";

import { FaPen } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { SALES_API } from "../../../services/api";
import { useQuery } from "react-query";
import { RegisterOrEditSales } from "../RegisterOrEditSales";
import { DeleteSale } from "../Delete";

type CoordinatesType = {
  x: number;
  y: number;
};

export const ModalSale = ({
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
      const { data } = await SALES_API.getPerId(id);
      return data;
    }
  );

  const verifyWidthOfModal = () => {
    const modalWidth = document?.querySelector("#modal-content")?.clientWidth;
    if (modalWidth === undefined || modalWidth === null) return -15;
    return modalWidth;
  };

  const [editIsOpen, setEditIsOpen] = useState(false);

  const [deletIsOpen, setDeletIsOpen] = useState(false);

  const editSale = () => {
    if (editIsOpen) {
      return (
        <RegisterOrEditSales
          modalIsOpen
          setModalIsOpen={(value: boolean) => {
            setEditIsOpen(value);
            closeModal();
          }}
          title="Editar Venda"
          placeholder={{
            client: data?.cliente?.cnpj,
            saleDate: data?.data,
            situation: data?.status,
            valueSale: data?.valor,
          }}
          placeHolderIsLoading={isLoading || isFetching}
          errorEdit={isError}
        />
      );
    }
    return null;
  };

  const deleteSale = () => {
    if (deletIsOpen) {
      return (
        <DeleteSale
          modalIsOpen
          setModalIsOpen={(value: boolean) => {
            setDeletIsOpen(value);
            closeModal();
          }}
          id={id}
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
      {deleteSale()}
      {editSale()}
      {!editIsOpen && !deletIsOpen && (
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
              setEditIsOpen(true);
            }}
          >
            <FaPen />
            <span>Editar</span>
          </button>
          <button
            onClick={() => {
              setDeletIsOpen(true);
            }}
          >
            <IoMdTrash />
            <span>Excluir</span>
          </button>
        </ModalContent>
      )}
    </Container>
  );
};
