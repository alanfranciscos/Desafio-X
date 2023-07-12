import styled from "styled-components";

/**
 * Acredito que ficaria melhor caso apenas os botões ficassem na seleção, pois
 * a cor casa com o botão e vira uma coisa infinita
 */
export const TabsContainer = styled.div`
  margin-top: 20px;
  background-color: #00000029;
  box-shadow: 5px 5px 20px #00000029;
  border-radius: 6px;
`;

export const TitleContainer = styled.ul`
  display: flex;
`;

export const Content = styled.li`
  list-style-type: none;
  background-color: white;
  border-radius: 0px 0px 6px 6px;
`;
