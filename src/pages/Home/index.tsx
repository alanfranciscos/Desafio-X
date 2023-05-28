import { useState } from "react";
import { useQuery } from "react-query";
import { Table } from "../../components/NewTable";
import { Container, InputContainer, SearchContainer } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { CLIENTS_API } from "../../services/api";
import { RegisterCliet } from "../../components/RegisterClient";

type returnDataProps = {
  location?: object;
  nome?: String;
  cnpj?: String;
  telefone?: String;
  estado?: String;
};

export const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState({
    registerClient: false,
  });

  const [chartData, setChartData] = useState({
    data: [],
    totalPages: null,
  });

  const [tableFilter, setTableFilter] = useState({
    atualPage: 0,
    sorted: "nome",
    sortedDefault: "nome",
  });

  const { data, isLoading, isFetching, isError } = useQuery(
    ["clients", tableFilter],
    async () => {
      const { data } = await CLIENTS_API.get(
        0,
        tableFilter?.sorted.toLowerCase()
      );
      data?.content?.map((element: returnDataProps) => {
        delete element?.location;
        delete element?.estado;
      });
      delete data?.content?.location;
      setChartData({
        ...chartData,
        data: data?.content,
        totalPages: data?.totalPages,
      });
      return data;
    }
  );

  // const data = [
  //   {
  //     nome: "Comércio de Livros LTDA",
  //     cnpj: "85.681.832/0001-73",
  //     email: "comerciodelivros@email.com",
  //     telefone: "(35) 99487-1548",
  //   },
  //   {
  //     nome: "Aomércio de Livros LTDA",
  //     cnpj: "85.681.832/0001-73",
  //     email: "comerciodelivros@email.com",
  //     telefone: "(35) 99487-1548",
  //   },
  //   {
  //     nome: "Comércio de Livros LTDA",
  //     cnpj: "85.681.832/0001-73",
  //     email: "comerciodelivros@email.com",
  //     telefone: "(35) 99487-1548",
  //   },
  //   {
  //     nome: "Comércio de Livros LTDA",
  //     cnpj: "85.681.832/0001-73",
  //     email: "comerciodelivros@email.com",
  //     telefone: "(35) 99487-1548",
  //   },
  // ];

  return (
    <Container>
      {/* modals */}
      <RegisterCliet
        modalIsOpen={modalIsOpen?.registerClient}
        setModalIsOpen={setModalIsOpen}
      />
      {/* end modals */}

      <h1>Lista de Clientes</h1>
      <InputContainer>
        <SearchContainer>
          <input placeholder="Digite o nome ou CNPJ do cliente que deseja pesquisar"></input>
          <button>
            <AiOutlineSearch />
          </button>
        </SearchContainer>
        <button
          className="register"
          onClick={() =>
            setModalIsOpen({
              registerClient: !modalIsOpen?.registerClient,
            })
          }
        >
          <BsPlusLg />
          &nbsp; Cadastrar cliente
        </button>
      </InputContainer>
      <Table
        data={chartData?.data}
        dataKeys={["Nome", "CNPJ", "Email", "Telefone"]}
        filter={tableFilter}
        setFilter={setTableFilter}
      />
    </Container>
  );
};
