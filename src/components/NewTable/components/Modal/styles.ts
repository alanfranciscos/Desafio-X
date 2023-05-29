import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  z-index: 1; /* Sit on top */
`;

export const ModalContent = styled.div`
  position: fixed;
  height: 99px;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 300px;
  border-radius: 6px;
  overflow: hidden;
`;
