import { useState } from "react";
import { Container, Item } from "./style";
import { RegisterOrEditClient } from "../Client/RegisterOrEdit";
import { useLocation, useNavigate } from "react-router-dom";

export const SideBar = ({
  sideBarIsOpen,
  setsideBarIsOpen,
}: {
  sideBarIsOpen: boolean | undefined;
  setsideBarIsOpen: Function;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [modalIsOpen, setModalIsOpen] = useState({
    registerClient: false,
  });

  const newClient = () => {
    return (
      <RegisterOrEditClient
        modalIsOpen={modalIsOpen?.registerClient}
        setModalIsOpen={setModalIsOpen}
        title="Cadastrar Cliente"
      />
    );
  };

  const handlePage = (path: string) => {
    navigate(path);
    setsideBarIsOpen(false);
  };

  return (
    <Container notClosed={sideBarIsOpen} data-testid="sidebar">
      {newClient()}
      <h2 data-testid="sidebar-title">GESTÃO DE CLIENTES</h2>
      <ul data-testid="sidebar-list">
        <li>
          <Item
            selected={
              location.pathname === "/" || location.pathname === "/clientes"
            }
            onClick={() => handlePage("/clientes")}
          >
            Lista de clientes
          </Item>
        </li>
        <li>
          <Item
            selected={modalIsOpen?.registerClient}
            onClick={() =>
              setModalIsOpen({
                registerClient: !modalIsOpen?.registerClient,
              })
            }
          >
            Cadastrar cliente
          </Item>
        </li>
      </ul>

      <h2 data-testid="sidebar-title">GESTÃO DE VENDAS</h2>
      <ul data-testid="sidebar-list">
        <li>
          <Item
            selected={location.pathname === "/vendas"}
            onClick={() => handlePage("/vendas")}
          >
            Lista de vendas
          </Item>
        </li>
        <li>
          <Item>Cadastrar venda</Item>
        </li>
      </ul>

      <h2 data-testid="sidebar-title">RELATÓRIOS</h2>
      <ul data-testid="sidebar-list">
        <li>
          <Item
            selected={location.pathname === "/relatorios"}
            onClick={() => handlePage("/relatorios")}
          >
            Relatórios
          </Item>
        </li>
      </ul>
    </Container>
  );
};
