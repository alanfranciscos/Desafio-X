import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  width: 280px;
  height: 100%;
  background-color: #023e8a;
  z-index: 1 !important;
  border-top: #ffffff 3px solid;

  h2 {
    margin-left: 32px;
    margin-top: 40px;
    font: normal normal medium SF Pro Display;
    letter-spacing: 0px;
    color: #ffffff;
  }
  li {
    margin-left: 32px;
    margin-top: 15px;

    cursor: pointer;

    font: normal normal medium SF Pro Display;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 0.5;
  }
`;
