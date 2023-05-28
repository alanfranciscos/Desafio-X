import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.1); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 300px;
  border-radius: 6px;
  overflow: hidden;

  span {
    margin: 10px 0;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 20px;
  }

  button {
    background: #407bff;
    border-radius: 3px;
    color: #ffffff;
    padding: 5px;
    width: 50px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .error-icon {
    color: red;
  }

  .sucsess-icon {
    color: green;
  }

  .error-button {
    background: #cccccc;
    color: #263238;
  }

  .sucsess-button {
    background: #407bff;
  }
`;
