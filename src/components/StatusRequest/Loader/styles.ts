import styled, { keyframes } from "styled-components";
const isRotating = keyframes`
 to {
      transform: rotate(1turn);
    }
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  animation: ${isRotating} 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #023e8a;
  height: 50px;
  width: 50px;
`;
