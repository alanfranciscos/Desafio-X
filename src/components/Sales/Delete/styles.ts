import styled from 'styled-components'

export const Modal = styled.div`
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

export const Container = styled.div`
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 500px;
  border-radius: 6px;
  overflow: hidden;
`

export const TitleContainer = styled.div`
  background: #023e8a;
  padding: 16px 0px 12px 21px;

  h3 {
    letter-spacing: 0px;
    color: #ffffff;
  }
`

export const Content = styled.div`
  margin: 10px 0;
  p {
    text-align: center;
    width: 100%;
    color: #707070;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 30px;
  border-radius: 3px;

  button {
    padding: 5px;
    width: 100px;
    cursor: pointer;
  }

  .button-cancel {
    background: #cccccc;
    color: #263238;
  }

  .button-confirm {
    background: #407bff;
    color: #ffffff;
  }
`
