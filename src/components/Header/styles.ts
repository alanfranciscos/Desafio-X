import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 115px;
  background-color: #023e8a;

  img {
    margin-left: 27px;
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: 22px;

  text-align: left;
  letter-spacing: 0px;
  color: #ffffff;

  .textContainer {
    margin-left: 18px;
    margin-right: 45px;
    h2 {
      font: normal normal normal 24px/29px SF Pro Display;
      margin-bottom: 13px;
    }

    p {
      font: normal normal 300 18px/22px SF Pro Display;
    }
  }

  svg {
    color: white;
  }
  .personIcon {
    width: 40px;
    height: 40px;
  }
  .exitIcon {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
`;
