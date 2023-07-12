import styled from "styled-components";

type TitleProps = {
  tabIsSelected?: boolean;
};

export const Title = styled.li<TitleProps>`
  z-index: ${({ tabIsSelected }) => (tabIsSelected ? 2 : 1)};
  background-color: ${({ tabIsSelected }) =>
    tabIsSelected ? "#ffffff" : "none"};
  border-radius: 2px 2px 0 0;
  opacity: 1;
  width: max-content;
  padding: 10px 5px;

  button {
    color: #5c4444;
    background-color: transparent;
    cursor: pointer;
  }
`;
