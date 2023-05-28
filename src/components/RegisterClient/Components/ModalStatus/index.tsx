import { Container, ModalContent } from "./styles";
import { GiConfirmed, GiCancel } from "react-icons/gi";

export const ModalStatus = ({
  status,
  confirm,
}: {
  status: boolean | undefined;
  confirm: Function;
}) => {
  if (status === false) {
    return (
      <Container>
        <ModalContent>
          <span>Ops, algo deu errado</span>
          <GiCancel className="error-icon" />
          <button onClick={() => confirm()} className="error-button">
            Ok
          </button>
        </ModalContent>
      </Container>
    );
  }
  if (status === true) {
    return (
      <Container>
        <ModalContent>
          <span>Usuário cadastrado com sucesso!</span>
          <GiConfirmed className="sucsess-icon" />
          <button onClick={() => confirm()} className="sucsess-button">
            Ok
          </button>
        </ModalContent>
      </Container>
    );
  }
  return null;
};
