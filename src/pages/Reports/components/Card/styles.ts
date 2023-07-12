import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  width: 280px;
  height: 100px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 20px #00000029;
  border-radius: 8px;
  opacity: 1;

  .title {
    text-transform: uppercase;
    letter-spacing: 0px;
    color: #5c4444;
    opacity: 1;
    font-size: 12px;

    p {
      letter-spacing: 0px;
      color: #5c4444;
      opacity: 1;
    }
  }

  .value--container {
    display: flex;

    svg {
      color: #023e8a;
      width: 16px;
      height: 16px;
    }

    p {
      font-size: 16px;
      text-align: left;
      letter-spacing: 0px;
      color: #5c4444;
    }
  }
`;
