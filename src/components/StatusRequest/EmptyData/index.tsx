import noData from "../../../assets/no_data.svg";
import { Container } from "./styles";

export const EmptyData = () => {
  return (
    <Container>
      <img data-testid="sem-dados" src={noData} alt="sem-dados" />
    </Container>
  );
};
