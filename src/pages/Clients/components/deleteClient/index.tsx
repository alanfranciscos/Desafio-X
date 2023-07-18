import { Container } from "./styles";
import { DeleteClientModal } from "../../../../components/Client/Delete";

export const DeleteClient = ({
  idSelected,
  deleteIsOpen,
  setDeleteIsOpen,
}: {
  idSelected: string | null;
  deleteIsOpen: boolean;
  setDeleteIsOpen: Function;
}) => {
  if (deleteIsOpen) {
    return (
      <Container>
        <DeleteClientModal
          modalIsOpen
          setModalIsOpen={(value: boolean) => {
            setDeleteIsOpen(value);
          }}
          id={idSelected}
        />
      </Container>
    );
  }
  return null;
};
