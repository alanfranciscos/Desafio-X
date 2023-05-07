import { Table } from "../../components/Table";
import { Container, InputContainer, SearchContainer } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

export const Home = () => {
  const data = [
    {
      nome: "Comércio de Livros LTDA",
      cnpj: "85.681.832/0001-73",
      email: "comerciodelivros@email.com",
      telefone: "(35) 99487-1548",
    },
    {
      nome: "Aomércio de Livros LTDA",
      cnpj: "85.681.832/0001-73",
      email: "comerciodelivros@email.com",
      telefone: "(35) 99487-1548",
    },
    {
      nome: "Comércio de Livros LTDA",
      cnpj: "85.681.832/0001-73",
      email: "comerciodelivros@email.com",
      telefone: "(35) 99487-1548",
    },
    {
      nome: "Comércio de Livros LTDA",
      cnpj: "85.681.832/0001-73",
      email: "comerciodelivros@email.com",
      telefone: "(35) 99487-1548",
    },
  ];

  return (
    <Container>
      <h1>Lista de Clientes</h1>
      <InputContainer>
        <SearchContainer>
          <input placeholder="Digite o nome ou CNPJ do cliente que deseja pesquisar"></input>
          <button>
            <AiOutlineSearch />
          </button>
        </SearchContainer>
        <button className="register">
          <BsPlusLg />
          &nbsp; Cadastrar cliente
        </button>
      </InputContainer>
      <Table data={data} dataKeys={["Nome", "CNPJ", "Email", "Telefone"]} />
    </Container>
  );
};
