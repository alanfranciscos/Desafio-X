import { useState, useEffect } from "react";

import { Input } from "../Form/Input";
import {
  ConfirmationContainer,
  Container,
  Form,
  InputGroup,
  MapContainer,
  ModalContent,
  ModalHeader,
} from "./styles";
import { Map } from "../Map";
import { useQuery } from "react-query";
import { CLIENTS_API, IBGE_API } from "../../services/api";
import { LatLngTuple } from "leaflet";
import { SelectInput } from "../Form/SelectInput";
import { MapStatus } from "../Map/MapStauts";
import { ModalStatus } from "./Components/ModalStatus";

export const RegisterCliet = ({
  modalIsOpen,
  setModalIsOpen,
}: {
  modalIsOpen: boolean;
  setModalIsOpen: Function;
}) => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    cnpj: "",
    phone: "",
    email: "",
  });
  const [location, setInputLocation] = useState([0, 0] as LatLngTuple);
  const [inputUF, setInputUF] = useState("");
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
    }
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
      formInputs?.cnpj?.length &&
      inputUF?.length &&
      formInputs?.phone &&
      locationsIsSetted
    ) {
      CLIENTS_API.create({
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
    setInputUF("");
  }, [modalIsOpen]);

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
              <h3>Cadastrar Cliente</h3>
            </ModalHeader>
            <Form>
              <Input
                isRequired
                placeholder=""
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
                  placeholder=""
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
                  placeholder=""
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
                <SelectInput data={data} getValue={setInputUF} label="UF *" />
                <Input
                  isRequired
                  placeholder=""
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
                      center={metaData ? metaData : [0, 0]}
                      zoom={6}
                      setPosition={(value: LatLngTuple) =>
                        setInputLocation(value)
                      }
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
                <button className="button-confirm" onClick={createClient}>
                  Salvar
                </button>
              </ConfirmationContainer>
            </Form>
            {status !== undefined ? (
              <ModalStatus
                status={status}
                confirm={function () {
                  reestoreFilters();
                }}
              />
            ) : null}
          </ModalContent>
        </Container>
      ) : null}
    </>
  );
};
