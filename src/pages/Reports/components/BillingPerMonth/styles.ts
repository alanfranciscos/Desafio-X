import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 30vh;
  align-items: center;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  padding: 20px 0;
`

export const Content = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;

  table {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;

    width: 100%;
  }
`

type ButtonContainerProps = {
  disabled: boolean
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  width: 200px;
  display: flex;
  justify-content: center;

  overflow: hidden;

  button {
    white-space: nowrap;
    color: #ffffff;
    background-color: ${({ disabled }) => (disabled ? '#7C9BB0' : '#1f78b4')};
    padding: 5px 10px;

    cursor: pointer;
  }
`
