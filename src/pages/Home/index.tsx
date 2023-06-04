import { useState } from "react";
import { useQuery } from "react-query";
import { Table } from "../../components/NewTable";
import { Container, InputContainer, SearchContainer } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { CLIENTS_API } from "../../services/api";
import { RegisterCliet } from "../../components/RegisterClient";
import { cnpjToNumbers } from "../../utils/cnpj";

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
    data: [{}],
    totalPages: -1,
    totalElements: -1,
  });

  const [tableFilter, setTableFilter] = useState({
    atualPage: 0,
    sorted: "Nome",
    sortOrder: "asc", // asc | desc
  });

  const [inputSearch, setInputSearch] = useState("");
  const [idSearch, setIdSerach] = useState("");

  useQuery(["clients", tableFilter, idSearch], async () => {
    if (!idSearch) {
      const { data } = await CLIENTS_API.get(
        tableFilter?.atualPage,
        tableFilter?.sorted.toLowerCase(),
        tableFilter?.sortOrder
      );

      data?.content?.forEach((element: returnDataProps) => {
        delete element?.location;
        delete element?.estado;
      });

      setChartData({
        ...chartData,
        data: data?.content,
        totalPages: data?.totalPages,
        totalElements: data?.totalElements,
      });
      return data;
    } else {
      const { data } = await CLIENTS_API.getPerCNPJ(cnpjToNumbers(idSearch));

      delete data.location;
      delete data.estado;
      const newData = [data];

      setChartData({
        ...chartData,
        data: newData,
        totalPages: 0,
        totalElements: 1,
      });
      return data;
    }
  });

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
        title="Cadastrar Cliente"
      />
      {/* end modals */}

      <h1>Lista de Clientes</h1>
      <InputContainer>
        <SearchContainer>
          <input
            placeholder="Digite o nome ou CNPJ do cliente que deseja pesquisar"
            onChange={(event) => setInputSearch(event?.target?.value)}
          ></input>
          <button onClick={() => setIdSerach(inputSearch)}>
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
        numberOfPages={chartData?.totalPages}
        totalElements={chartData?.totalElements}
        dataKeys={["Nome", "CNPJ", "Email", "Telefone"]}
        filter={tableFilter}
        setFilter={setTableFilter}
        id="cnpj"
      />
    </Container>
  );
};
