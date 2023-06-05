import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-left: 10px;
    margin-bottom: 3px;
    letter-spacing: 0px;
    color: #444444;
    font-size: 13px;
  }

  select {
    margin: 0px 10px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    height: 21px;
  }

  .select-disable {
    background-color: #f0f0f0f0;
  }
`;
