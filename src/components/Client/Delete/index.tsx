import { useState, useEffect } from "react";

import {
  ButtonContainer,
  Container,
  Content,
  Modal,
  TitleContainer,
} from "./styles";
import { DeleteClientProps } from "./types";
import { CLIENTS_API } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export const DeleteClient = ({
  modalIsOpen,
  setModalIsOpen,
  id,
}: DeleteClientProps) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(document?.getElementById("modal"));

  useEffect(() => {
    setModal(document?.getElementById("modal"));
  }, [modalIsOpen]);

  const deleteClient = async (id: string) => {
    CLIENTS_API.delete(id).then(() => navigate(0));
  };

  return (
    <Modal
      id="modal"
      onClick={(event) => {
        if (event.target === modal && modal) {
          setModalIsOpen(false);
        }
      }}
    >
      <Container>
        <TitleContainer>
          <h3>Excluir Cliente</h3>
        </TitleContainer>
        <Content>
          <p>
            Deseja excluir este cliente? Esta ação é irreversível e todas as
            vendas vinculadas ao cliente serão excluídas.
          </p>
          <ButtonContainer>
            <button
              className="button-cancel"
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              Cancelar
            </button>
            <button
              onClick={async () => {
                await deleteClient(id);
              }}
              className="button-confirm"
            >
              Excluir
            </button>
          </ButtonContainer>
        </Content>
      </Container>
    </Modal>
  );
};
