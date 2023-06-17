import { useState } from "react";
import { Table } from "../../components/NewTable";
import { Container, InputContainer, SearchContainer } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { RegisterOrEditSales } from "../../components/Sales/RegisterOrEditSales";
import { useQuery } from "react-query";
import { SALES_API } from "../../services/api";

type returnDataProps = {
  cliente: any;
  data?: String;
  id?: String;
  status: String;
  valor?: number;
};

export const Sales = () => {
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
    sorted: "Cliente",
    sortOrder: "asc", // asc | desc
  });

  const [inputSearch, setInputSearch] = useState("");
  const [idSearch, setIdSerach] = useState("");

  useQuery(["clients", tableFilter, idSearch], async () => {
    if (!idSearch) {
      const { data } = await SALES_API.get(
        tableFilter?.atualPage,
        tableFilter?.sorted.toLowerCase(),
        tableFilter?.sortOrder
      );

      data?.content?.forEach((element: returnDataProps) => {
        element.cliente = element?.cliente?.nome;
        const status = element.status.replace("_", " ");
        element.status =
          status?.charAt(0).toUpperCase() + status?.slice(1).toLowerCase();
      });

      setChartData({
        ...chartData,
        data: data?.content,
        totalPages: data?.totalPages,
        totalElements: data?.totalElements,
      });
    } else {
      const { data } = await SALES_API.getPerClient(
        tableFilter?.atualPage,
        idSearch,
        tableFilter?.sorted.toLowerCase(),
        tableFilter?.sortOrder
      );

      data?.content?.forEach((element: returnDataProps) => {
        element.cliente = element?.cliente?.nome;
        const status = element.status.replace("_", " ");
        element.status =
          status?.charAt(0).toUpperCase() + status?.slice(1).toLowerCase();
      });
      setChartData({
        ...chartData,
        data: data?.content,
        totalPages: data?.totalPages,
        totalElements: data?.totalElements,
      });
    }
  });

  const Modals = () => {
    return (
      <RegisterOrEditSales
        modalIsOpen={true}
        setModalIsOpen={() => null}
        title="Cadastrar Venda"
      />
    );
  };

  return (
    <Container>
      {Modals()}

      <h1>Lista de Vendas</h1>
      <InputContainer>
        <SearchContainer>
          <input
            placeholder="Digite o nome do cliente que deseja pesquisar"
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
          &nbsp; Cadastrar venda
        </button>
      </InputContainer>
      <Table
        data={chartData?.data}
        numberOfPages={chartData?.totalPages}
        totalElements={chartData?.totalElements}
        dataKeys={["Cliente", "Data", "Status", "Valor"]}
        filter={tableFilter}
        setFilter={setTableFilter}
        id="id"
      />
    </Container>
  );
};
