import { Map } from "../../../../components/Map";
import { Container, Content } from "./styles";

export const ClientLocationMap = () => {
  return (
    <Container>
      <Content>
        <Map listItens />
      </Content>
    </Container>
  );
};
