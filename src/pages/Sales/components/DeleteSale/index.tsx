import { Container } from "./styles";
import { DeleteSaleModal } from "../../../../components/Sales/Delete";

export const DeleteSale = ({
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
        <DeleteSaleModal
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
