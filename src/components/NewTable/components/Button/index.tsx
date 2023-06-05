import { ButtonContainer } from "./styles";

export const Button = ({
  children,
  openModal,
}: {
  children: any;
  openModal: Function;
}) => {
  return (
    <ButtonContainer onClick={(e) => openModal(e)}>{children}</ButtonContainer>
  );
};
