import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
`;

export const TableTitle = styled.h2`
  text-align: left;
  font: normal normal bold 20px SF Pro Display;
  letter-spacing: 0px;
  color: #535353;
`;

export const TableContainer = styled.table`
  margin-top: 10px;
  border-collapse: collapse;
  width: 100%;

  text-align: left;
  font: normal normal normal 15px SF Pro Display;
  letter-spacing: 0px;
  color: #6e6e6e;

  .thead {
    tr {
      background: none !important;
    }
    th {
      svg {
        transform: translateY(3px);
      }
    }
  }

  th,
  td {
    padding: 8px;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: none;
  }

  tr:nth-child(odd) {
    background: #f9f9f9 0% 0% no-repeat padding-box;
  }

  tr th {
    cursor: pointer;
  }

  th.active {
    background-color: #4caf50;
    color: white;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;

  padding-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5px;
  border-top: 2px solid #cccccc;

  p {
    text-align: left;
    font: normal normal normal SF Pro Display;
    letter-spacing: 0px;
    color: #686868;
  }

  svg {
    cursor: pointer;
  }
`;

export const SelectPage = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  p {
    margin-right: 10px;
    cursor: pointer;
  }
`;
