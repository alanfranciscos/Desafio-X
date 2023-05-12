import { ButtonContainer } from "./styles";

export const Button = ({ children }: { children: any }) => {
  return (
    <ButtonContainer data-testid="table-button">{children}</ButtonContainer>
  );
};
