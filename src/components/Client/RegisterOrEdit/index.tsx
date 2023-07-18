import { useState, useEffect } from "react";

import {
  ConfirmationContainer,
  Container,
  Form,
  InputGroup,
  LoaderContainer,
  MapContainer,
  ModalContent,
  ModalHeader,
} from "./styles";
import { useQuery } from "react-query";
import { LatLngTuple } from "leaflet";
import { ModalStatus } from "./Components/ModalStatus";
import { useNavigate } from "react-router-dom";
import { CLIENTS_API, IBGE_API } from "../../../services/api";
import { cnpjToNumbers } from "../../../utils/cnpj";
import { SelectInput } from "../../Form/SelectInput";
import { MapStatus } from "../../Map/MapStauts";
import { Input } from "../../Form/Input";
import { Map } from "../../Map";
import { Loader } from "../../StatusRequest/Loader";

export const RegisterOrEditClient = ({
  modalIsOpen,
  setModalIsOpen,
  title,
  placeholder,
  placeHolderIsLoading,
  error,
}: {
  modalIsOpen: boolean;
  setModalIsOpen: Function;
  title: string;
  placeholder: {
    name: string;
    cnpj: string;
    phone: string;
    email: string;
    state: string;
    location: LatLngTuple | null;
  };
  placeHolderIsLoading: boolean;
  error: boolean;
}) => {
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    name: placeholder?.name,
    cnpj: placeholder?.cnpj,
    phone: placeholder?.phone,
    email: placeholder?.email,
  });
  const [location, setInputLocation] = useState([0, 0] as LatLngTuple);
  const [inputUF, setInputUF] = useState(placeholder?.state);
  const [locationsIsSetted, setLocationsIsSetted] = useState(false);
  const [status, setStatus] = useState<undefined | boolean>(undefined);

  const reestoreFilters = () => {
    setFormInputs({
      name: "",
      cnpj: "",
      phone: "",
      email: "",
    });
    setInputLocation([0, 0]);
    setInputUF("");
    setLocationsIsSetted(false);
    setStatus(undefined);
    setModalIsOpen(false);
  };

  const { data, isLoading, isFetching, isError } = useQuery(
    ["ibge - states"],
    async () => {
      const { data } = await IBGE_API.getStates();

      const sortedData = data?.sort((a: any, b: any) => {
        if (a?.nome < b?.nome) return -1;
        if (a?.nome > b?.nome) return 1;
        return 0;
      });

      return sortedData.map((value: any) => {
        return {
          value: value.id,
          label: value.nome,
        };
      });
    },
    { enabled: modalIsOpen }
  );

  const {
    data: metaData,
    isLoading: isLoadingMetaData,
    isFetching: isFetchingMetaData,
    isError: isErrorMetaData,
  } = useQuery(
    ["ibge - coordinates", inputUF],
    async () => {
      const { data } = await IBGE_API.getMetadata(inputUF);

      const coordinates = data?.[0]?.centroide;
      setInputLocation([
        coordinates?.latitude,
        coordinates?.longitude,
      ] as LatLngTuple);

      setLocationsIsSetted(true);

      return [coordinates?.latitude, coordinates?.longitude] as
        | LatLngTuple
        | undefined;
    },
    {
      enabled: !!inputUF,
    }
  );

  const createClient = async () => {
    if (
      formInputs?.name?.length &&
      cnpjToNumbers(formInputs?.cnpj).length === 14 &&
      inputUF?.length &&
      formInputs?.phone.length &&
      locationsIsSetted
    ) {
      await CLIENTS_API.create({
        nome: formInputs?.name,
        cnpj: formInputs?.cnpj,
        estado: inputUF,
        telefone: formInputs?.phone,
        email: formInputs?.email,
        location: {
          x: location?.[0],
          y: location?.[1],
        },
      })
        .then(function () {
          setStatus(true);
        })
        .catch(function () {
          setStatus(false);
        });
    } else {
      setStatus(false);
    }
  };

  const handleMouseCursor = (curosr: string) => {
    document.body.style.cursor = curosr;
    const button = document?.getElementById("button-confirm");
    if (button !== null) {
      button.style.cursor = curosr === "default" ? "pointer" : curosr;
    }
  };

  const editClient = async () => {
    if (
      formInputs?.name?.length &&
      cnpjToNumbers(formInputs?.cnpj).length === 14 &&
      inputUF?.length &&
      formInputs?.phone &&
      locationsIsSetted
    ) {
      await CLIENTS_API.edit(cnpjToNumbers(placeholder.cnpj), {
        nome: formInputs?.name,
        cnpj: formInputs?.cnpj,
        estado: inputUF,
        telefone: formInputs?.phone,
        email: formInputs?.email,
        location: {
          x: location?.[0],
          y: location?.[1],
        },
      })
        .then(function () {
          setStatus(true);
        })
        .catch(function () {
          setStatus(false);
        });
    }
  };

  const [modal, setModal] = useState(document?.getElementById("modal"));

  useEffect(() => {
    setModal(document?.getElementById("modal"));
    setInputUF(placeholder?.state);
  }, [modalIsOpen, placeholder?.state]);

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
                  <Input
                    isRequired
                    placeholder={placeholder?.name}
                    title="Nome"
                    content={(value: string) =>
                      setFormInputs({
                        ...formInputs,
                        name: value,
                      })
                    }
                    value={formInputs.name}
                  />
                  <InputGroup>
                    <Input
                      isRequired
                      placeholder={placeholder?.cnpj}
                      title="CNPJ"
                      content={(value: string) =>
                        setFormInputs({
                          ...formInputs,
                          cnpj: value,
                        })
                      }
                      value={formInputs?.cnpj}
                    />
                    <Input
                      isRequired
                      placeholder={placeholder?.phone}
                      title="Telefone"
                      content={(value: string) =>
                        setFormInputs({
                          ...formInputs,
                          phone: value,
                        })
                      }
                      value={formInputs?.phone}
                    />
                  </InputGroup>
                  <InputGroup>
                    <SelectInput
                      data={data}
                      getValue={setInputUF}
                      label="UF *"
                      valueSelected={placeholder?.state}
                    />
                    <Input
                      isRequired
                      placeholder={placeholder?.email}
                      title="E-mail"
                      content={(value: string) =>
                        setFormInputs({
                          ...formInputs,
                          email: value,
                        })
                      }
                      value={formInputs?.email}
                    />
                  </InputGroup>
                  {inputUF !== "" ? (
                    <span>Arraste o ponteiro para a localização desejada</span>
                  ) : (
                    <span>Selecione um inputUF</span>
                  )}
                  <MapContainer>
                    {!isLoadingMetaData &&
                    locationsIsSetted &&
                    !isFetchingMetaData &&
                    status === undefined &&
                    inputUF !== "" ? (
                      <>
                        <Map
                          width="100%"
                          height="100%"
                          center={
                            placeholder?.location !== null &&
                            placeholder?.state === inputUF
                              ? placeholder?.location
                              : metaData
                              ? metaData
                              : [0, 0]
                          }
                          zoom={6}
                          setPosition={(value: LatLngTuple) => {
                            setInputLocation(value);
                          }}
                          loading={
                            isFetchingMetaData ||
                            isFetchingMetaData ||
                            isLoading ||
                            isLoadingMetaData
                          }
                          error={error}
                        />
                      </>
                    ) : (
                      <MapStatus
                        error={isError || isErrorMetaData}
                        loading={
                          isLoading ||
                          isLoadingMetaData ||
                          isFetching ||
                          isFetchingMetaData
                        }
                      />
                    )}
                  </MapContainer>
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
                        if (placeholder?.cnpj) {
                          await editClient();
                        } else {
                          await createClient();
                        }
                        handleMouseCursor("default");
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

RegisterOrEditClient.defaultProps = {
  placeholder: {
    name: "",
    cnpj: "",
    phone: "",
    email: "",
    state: "",
    location: null,
  },
  placeHolderIsLoading: false,
  error: false,
};
