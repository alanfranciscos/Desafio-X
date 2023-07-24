import styled from 'styled-components'

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
`

export const ModalContent = styled.div`
  position: fixed;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  border-radius: 6px;
  overflow: hidden;
  padding: 15px;

  button {
    background-color: #fefefe;
    cursor: pointer;
    display: flex;
  }

  button:first-child {
    margin-bottom: 10px;
  }

  svg {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    color: #707070;
  }

  span {
    color: #707070;
  }
`
