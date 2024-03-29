import styled from 'styled-components'

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
`

export const InputGroup = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 500px;
  border-radius: 6px;
  overflow: hidden;
`

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
`

export const MapContainer = styled.div`
  width: 95%;
  height: 200px;
  margin-top: 10px;
`

export const ConfirmationContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    padding: 5px;
    width: 100px;
    cursor: pointer;
  }

  .button-cancel {
    background: #cccccc;
    border-radius: 3px;
    letter-spacing: 0px;
    color: #263238;
  }

  .button-confirm {
    background: #407bff;
    border-radius: 3px;
    color: #ffffff;
  }
`
