import styled from 'styled-components'

export const Container = styled.div`
  margin: 25px 64px 0px 102px;

  h1 {
    margin-bottom: 25px;
    text-align: left;
    font: normal normal bold 26px SF Pro Display;
    letter-spacing: 0px;
    color: #535353;

    text-decoration: underline #023e8a;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
  }

  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;

    white-space: nowrap;
    padding-left: 10px;
    padding-right: 10px;

    height: 40px;
    background: #023e8a 0% 0% no-repeat padding-box;
    opacity: 1;
    color: #ffffff;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  height: 40px;
  width: 100%;

  input {
    width: 90%;

    background: #ffffff 0% 0% no-repeat padding-box;

    border: 1px solid #cccccc;
    border-radius: 3px 0px 0px 3px;

    opacity: 1;
    padding-left: 17px;
  }

  button {
    width: 55px;

    background: #023e8a 0% 0% no-repeat padding-box;
    border-radius: 0px 5px 5px 0px;
    opacity: 1;

    border: none;

    svg {
      width: 20px;
      height: 20px;
      color: #ffffff;
    }
  }
`

export const ContentContainer = styled.div`
  margin-top: 20px;
`
