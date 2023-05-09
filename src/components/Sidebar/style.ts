import styled, { css, keyframes } from "styled-components";

type ContainerProps = {
  closed?: boolean;
};

const open = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 15.625rem;
  }
`;

const close = keyframes`
  from {
    width: 15.625rem;
  }
  to {
    width: 0px;
  }
`;

const hover = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

const dontHover = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
`;

export const Container = styled.aside<ContainerProps>`
  ${({ closed }) =>
    closed
      ? css`
          animation: ${close} 1s;
          animation-fill-mode: forwards;
        `
      : css`
          animation: ${open} ${closed === undefined ? "0s" : "1s"};
          animation-fill-mode: forwards;
        `};
  position: fixed;
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
    animation: ${dontHover} 0.5s;
    opacity: 0.5;

    :hover {
      animation: ${hover} 0.5s;
      opacity: 1;
    }
  }
`;
