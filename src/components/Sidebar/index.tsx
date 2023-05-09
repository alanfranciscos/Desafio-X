import { Container } from "./style";

export const SideBar = ({
  sideBarIsOpen,
}: {
  sideBarIsOpen: boolean | undefined;
}) => {
  return (
    <Container closed={!sideBarIsOpen} data-testid="sidebar">
      <h2>GESTÃO DE CLIENTES</h2>
      <ul>
        <li>Lista de clientes</li>
        <li>Cadastrar cliente</li>
      </ul>

      <h2>GESTÃO DE VENDAS</h2>
      <ul>
        <li>Lista de vendas</li>
        <li>Cadastrar venda</li>
      </ul>

      <h2>RELATÓRIOS</h2>
      <ul>
        <li>Relatórios</li>
      </ul>
    </Container>
  );
};
