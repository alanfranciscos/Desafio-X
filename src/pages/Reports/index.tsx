import { TbCurrencyDollar } from "react-icons/tb";
import { Card } from "./components/Card";
import { Container, ContainerCards } from "./styles";
import Tabs from "./components/Tabs";
import { Tab } from "./components/Tabs/Tab";

export const Reports = () => {
  return (
    <Container>
      <h1>Relatórios</h1>
      <ContainerCards>
        <Card
          title="vendas no ano"
          icon={<TbCurrencyDollar />}
          value={"R$ 500.000,00"}
        />
        <Card
          title="CLIENTE COM MAIS VENDAS NO MÊS"
          icon={<TbCurrencyDollar />}
          value={"LIVRARIA SEU LIVRO"}
        />
        <Card
          title="CLIENTE COM MAIOR FATURAMENTO (MÊS)"
          icon={<TbCurrencyDollar />}
          value={"SEU BAR (R$ 5.000,00)"}
        />
        <Card
          title="CLIENTE COM MAIOR FATURAMENTO (ANO)"
          icon={<TbCurrencyDollar />}
          value={"SEU BAR (R$ 50.000,00)"}
        />
      </ContainerCards>

      <Tabs>
        <Tab title="Localização de Clientes">
          <p>mapa</p>
        </Tab>
        <Tab title="Faturamento por mês">
          <p>GRAFICO</p>
        </Tab>
      </Tabs>
    </Container>
  );
};
