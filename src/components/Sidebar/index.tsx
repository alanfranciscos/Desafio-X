import { useState } from "react";
import { Container, Item } from "./style";
import { RegisterOrEditClient } from "../Client/RegisterOrEdit";
import { useLocation, useNavigate } from "react-router-dom";
import { RegisterOrEditSales } from "../Sales/RegisterOrEditSales";

export const SideBar = ({
  sideBarIsOpen,
  setsideBarIsOpen,
}: {
  sideBarIsOpen: boolean | undefined;
  setsideBarIsOpen: Function;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [modalCreateSaleIsOpen, setModalCreateSaleIsOpen] = useState(false);
  const [modalCreateClientIsOpen, setModalCreateClientIsOpen] = useState(false);

  const handlePage = (path: string) => {
    navigate(path);
    setsideBarIsOpen(false);
  };

  return (
    <Container notClosed={sideBarIsOpen} data-testid="sidebar">
      <RegisterOrEditClient
        modalIsOpen={modalCreateClientIsOpen}
        setModalIsOpen={setModalCreateClientIsOpen}
        title="Cadastrar Cliente"
      />

      <RegisterOrEditSales
        modalIsOpen={modalCreateSaleIsOpen}
        setModalIsOpen={setModalCreateSaleIsOpen}
        title="Cadastrar Venda"
      />
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
            selected={modalCreateClientIsOpen}
            onClick={() => {
              setModalCreateClientIsOpen(!modalCreateClientIsOpen);
              setsideBarIsOpen(false);
            }}
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
          <Item
            selected={modalCreateSaleIsOpen}
            onClick={() => {
              setModalCreateSaleIsOpen(!modalCreateSaleIsOpen);
              setsideBarIsOpen(false);
            }}
          >
            Cadastrar venda
          </Item>
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
