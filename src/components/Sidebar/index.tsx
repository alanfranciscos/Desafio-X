import { Container } from "./style";

export const SideBar = ({
  sideBarIsOpen,
}: {
  sideBarIsOpen: boolean | undefined;
}) => {
  return (
    <Container notClosed={sideBarIsOpen} data-testid="sidebar">
      <h2 data-testid="sidebar-title">GESTÃO DE CLIENTES</h2>
      <ul data-testid="sidebar-list">
        <li>Lista de clientes</li>
        <li>Cadastrar cliente</li>
      </ul>

      <h2 data-testid="sidebar-title">GESTÃO DE VENDAS</h2>
      <ul data-testid="sidebar-list">
        <li>Lista de vendas</li>
        <li>Cadastrar venda</li>
      </ul>

      <h2 data-testid="sidebar-title">RELATÓRIOS</h2>
      <ul data-testid="sidebar-list">
        <li>Relatórios</li>
      </ul>
    </Container>
  );
};
