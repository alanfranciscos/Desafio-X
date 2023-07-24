import React from 'react'

import { GiConfirmed, GiCancel } from 'react-icons/gi'

import { Container, ModalContent } from './styles'
import { ModalStatusType } from './types'

export const ModalStatus = ({
  status,
  setStatus,
  confirm
}: ModalStatusType) => {
  if (status === false) {
    return (
      <Container>
        <ModalContent>
          <h3>Ops, algo deu errado!</h3>
          <span>Certfique de não estar criando um cliente existente.</span>
          <span>É necessário preencher todos os campos.</span>
          <GiCancel className="error-icon" />
          <button onClick={() => setStatus(undefined)} className="error-button">
            Ok
          </button>
        </ModalContent>
      </Container>
    )
  }
  if (status === true) {
    return (
      <Container>
        <ModalContent>
          <span>Usuário cadastrado com sucesso!</span>
          <GiConfirmed className="sucsess-icon" />
          <button onClick={() => confirm()} className="sucsess-button">
            Ok
          </button>
        </ModalContent>
      </Container>
    )
  }
  return null
}
