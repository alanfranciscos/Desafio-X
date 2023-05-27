import { useState, useEffect } from "react";

import { Input } from "../Form/Input";
import {
  Container,
  Form,
  InputGroup,
  MapContainer,
  ModalContent,
  ModalHeader,
} from "./styles";
import { Map } from "../Map";
import { useQuery } from "react-query";
import { IBGE_API } from "../../services/api";
import { LatLngTuple } from "leaflet";
import { SelectInput } from "../Form/SelectInput";
import { MapStatus } from "../Map/MapStauts";
import { error } from "console";

export const RegisterCliet = ({
  modalIsOpen,
  setModalIsOpen,
}: {
  modalIsOpen: boolean;
  setModalIsOpen: Function;
}) => {
  const [inputName, setInputName] = useState("");
  const [inputCNPJ, setInputCNPJ] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputUF, setInputUF] = useState("");
  const [inputEMAIL, setInputEMAIL] = useState("");
  const [formInputs, setFormInputs] = useState({
    inputLocation: [0, 0] as LatLngTuple,
  });
  const [locationsIsSetted, setLocationsIsSetted] = useState(false);

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
      setFormInputs({
        ...formInputs,
        inputLocation: [
          coordinates?.latitude,
          coordinates?.longitude,
        ] as LatLngTuple,
      });

      setLocationsIsSetted(true);

      return [coordinates?.latitude, coordinates?.longitude] as
        | LatLngTuple
        | undefined;
    },
    {
      enabled: !!inputUF,
    }
  );

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
                content={(value: string) => setInputName(value)}
                value={inputName}
              />
              <InputGroup>
                <Input
                  isRequired
                  placeholder=""
                  title="CNPJ"
                  content={(value: string) => setInputCNPJ(value)}
                  value={inputCNPJ}
                />
                <Input
                  isRequired
                  placeholder=""
                  title="Telefone"
                  content={(value: string) => setInputPhone(value)}
                  value={inputPhone}
                />
              </InputGroup>
              <InputGroup>
                <SelectInput data={data} getValue={setInputUF} label="UF *" />
                <Input
                  isRequired
                  placeholder=""
                  title="E-mail"
                  content={(value: string) => setInputEMAIL(value)}
                  value={inputEMAIL}
                />
              </InputGroup>
              {inputUF !== "" ? (
                <span>Arraste o ponteiro para a localização desejada</span>
              ) : (
                <span>Selecione um UF</span>
              )}
              <MapContainer>
                {!isLoadingMetaData &&
                locationsIsSetted &&
                !isFetchingMetaData &&
                inputUF !== "" ? (
                  <>
                    <Map
                      width="100%"
                      height="100%"
                      center={metaData ? metaData : [0, 0]}
                      zoom={6}
                      setPosition={(value: LatLngTuple) =>
                        setFormInputs({
                          inputLocation: value,
                        })
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
            </Form>
          </ModalContent>
        </Container>
      ) : null}
    </>
  );
};
