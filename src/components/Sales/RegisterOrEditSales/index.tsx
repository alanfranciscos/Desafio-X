import { useQuery } from "react-query";
import { Input } from "../../Form/Input";
import { InputDate } from "../../Form/InputDate";
import { SelectInput } from "../../Form/SelectInput";
import {
  ConfirmationContainer,
  Container,
  Form,
  InputGroup,
  LoaderContainer,
  ModalContent,
  ModalHeader,
} from "./styles";
import { CLIENTS_API, SALES_API } from "../../../services/api";
import { useEffect, useState } from "react";
import { RegisterOrEditSaleProps } from "./types";
import { useNavigate } from "react-router-dom";
import { ModalStatus } from "../../Client/RegisterOrEdit/Components/ModalStatus";
import { Loader } from "../../Loader";

export const RegisterOrEditSales = ({
  modalIsOpen,
  setModalIsOpen,
  title,
  placeholder,
  placeHolderIsLoading,
}: RegisterOrEditSaleProps) => {
  const [status, setStatus] = useState<undefined | boolean>(undefined);

  const { data: dataClientsNames } = useQuery(["clients-names"], async () => {
    const { data } = await CLIENTS_API.getClientsNames();
    return data;
  });

  const { data: dataStatus } = useQuery(["sales-status"], async () => {
    const { data } = await SALES_API.getPossibleStatus();
    return data;
  });

  const editSale = async () => {};

  const createSale = async () => {};

  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    client: placeholder?.client,
    saleDate: placeholder?.saleDate,
    situation: placeholder?.situation,
    valueSale: placeholder?.valueSale,
  });

  const reestoreFilters = () => {
    setFormInputs({
      client: placeholder?.client,
      saleDate: placeholder?.saleDate,
      situation: placeholder?.situation,
      valueSale: placeholder?.valueSale,
    });
    setModalIsOpen(false);
  };

  const handleMouseCursor = (curosr: string) => {
    document.body.style.cursor = curosr;
    const button = document?.getElementById("button-confirm");
    if (button !== null) {
      button.style.cursor = curosr === "default" ? "pointer" : curosr;
    }
  };

  const [modal, setModal] = useState(document?.getElementById("modal"));

  useEffect(() => {
    setModal(document?.getElementById("modal"));
  }, [modalIsOpen, placeholder?.client]);

  console.log(formInputs);

  return (
    <>
      {modalIsOpen ? (
        <Container
          id="modal"
          onClick={(event) => {
            if (event.target === modal && modal) {
              setModalIsOpen(false);
            }
          }}
        >
          <ModalContent>
            <ModalHeader>
              <h3>{title}</h3>
            </ModalHeader>
            {placeHolderIsLoading ? (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            ) : (
              <>
                <Form>
                  <SelectInput
                    data={dataClientsNames}
                    getValue={(value: string) =>
                      setFormInputs({
                        ...formInputs,
                        client: value,
                      })
                    }
                    label="Cliente *"
                    valueSelected={placeholder?.client}
                  />
                  <InputGroup>
                    <InputDate
                      title="Data da venda"
                      isRequired
                      getValue={(value: string) =>
                        setFormInputs({
                          ...formInputs,
                          saleDate: value,
                        })
                      }
                      value={formInputs?.saleDate}
                    />
                    <SelectInput
                      data={dataStatus}
                      getValue={(value: string) =>
                        setFormInputs({
                          ...formInputs,
                          situation: value,
                        })
                      }
                      label="Situação *"
                      valueSelected={placeholder?.situation}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Input
                      isRequired
                      placeholder={placeholder?.valueSale}
                      title="Valor da Venda"
                      content={(value: number) =>
                        setFormInputs({
                          ...formInputs,
                          valueSale: value,
                        })
                      }
                      value={formInputs?.valueSale}
                      type="number"
                    />
                    <div style={{ width: "100%" }} />
                  </InputGroup>

                  <ConfirmationContainer>
                    <button
                      className="button-cancel"
                      onClick={() => {
                        setModalIsOpen(false);
                      }}
                    >
                      Cancelar
                    </button>
                    <button
                      className="button-confirm"
                      id="button-confirm"
                      onClick={async () => {
                        handleMouseCursor("wait");
                        if (placeholder?.client) {
                          await editSale();
                          handleMouseCursor("default");
                        } else {
                          await createSale();
                          handleMouseCursor("default");
                        }
                      }}
                    >
                      Salvar
                    </button>
                  </ConfirmationContainer>
                </Form>
                {status !== undefined ? (
                  <ModalStatus
                    status={status}
                    setStatus={setStatus}
                    confirm={function () {
                      reestoreFilters();
                      navigate(0);
                    }}
                  />
                ) : null}
              </>
            )}
          </ModalContent>
        </Container>
      ) : null}
    </>
  );
};

RegisterOrEditSales.defaultProps = {
  placeholder: {
    client: null,
    saleDate: null,
    situation: null,
    valueSale: "R$ 0,00",
  },
  placeHolderIsLoading: false,
};
