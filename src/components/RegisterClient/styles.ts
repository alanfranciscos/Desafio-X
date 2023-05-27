import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0px;
  align-items: center;

  span {
    margin-top: 10px;
    letter-spacing: 0px;
    color: #444444;
    font-size: 13px;
  }
`;

export const InputGroup = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 500px;
  border-radius: 6px;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: #023e8a;
  width: 100%;
  height: 35px;

  h3 {
    letter-spacing: 0px;
    color: #ffffff;
  }
`;

export const MapContainer = styled.div`
  width: 95%;
  height: 200px;
  margin-top: 10px;
`;
