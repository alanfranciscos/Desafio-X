import err from "../../../assets/error.svg";
import { Container } from "./styles";

export const Error = () => {
  return (
    <Container>
      <img data-testid="error-data" src={err} alt="error-data" />
    </Container>
  );
};
