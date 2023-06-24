import { Loader } from "../../StatusRequest/Loader";
import { Container } from "./styles";

export const MapStatus = ({
  error,
  loading,
}: {
  error: boolean;
  loading: boolean;
}) => {
  if (error) {
    return (
      <Container>
        <span>Ocorreu um erro!!</span>
      </Container>
    );
  }
  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
  return (
    <Container>
      <span>Selecione uma opção para habilitar o mapa</span>
    </Container>
  );
};
