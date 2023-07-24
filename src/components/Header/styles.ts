import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  background-color: #023e8a;

  img {
    margin-left: 27px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: 22px;

  text-align: left;
  letter-spacing: 0px;
  color: #ffffff;

  .textContainer {
    margin-left: 18px;
    margin-right: 18px;
    h2 {
      font: normal normal normal SF Pro Display;
      margin-bottom: 5px;
    }

    p {
      font: normal normal 300 SF Pro Display;
    }
  }

  svg {
    color: white;
  }
  .personIcon {
    width: 30px;
    height: 30px;
  }
  .exitIcon {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`
