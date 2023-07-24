import React from 'react'
import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  ButtonContainer,
  Container,
  Content,
  Modal,
  TitleContainer
} from './styles'
import { DeleteClientProps } from './types'
import { CLIENTS_API } from '../../../services/api'
import { cnpjToNumbers } from '../../../utils/cnpj'

export const DeleteClientModal = ({
  modalIsOpen,
  setModalIsOpen,
  id
}: DeleteClientProps) => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(document?.getElementById('modal'))

  useEffect(() => {
    setModal(document?.getElementById('modal'))
  }, [modalIsOpen])

  const deleteClient = async (id: string) => {
    CLIENTS_API.delete(cnpjToNumbers(id)).then(() => navigate(0))
  }

  const handleMouseCursor = (curosr: string) => {
    document.body.style.cursor = curosr
    const button = document?.getElementById('button-confirm')
    if (button !== null) {
      button.style.cursor = curosr === 'default' ? 'pointer' : curosr
    }
  }

  return (
    <Modal
      id="modal"
      onClick={(event) => {
        if (event.target === modal && modal) {
          setModalIsOpen(false)
        }
      }}
    >
      <Container>
        <TitleContainer>
          <h3>Excluir Cliente</h3>
        </TitleContainer>
        <Content>
          <p>
            Deseja excluir este cliente? Esta ação é irreversível e todas as
            vendas vinculadas ao cliente serão excluídas.
          </p>
          <ButtonContainer>
            <button
              className="button-cancel"
              onClick={() => {
                setModalIsOpen(false)
              }}
            >
              Cancelar
            </button>
            <button
              onClick={async () => {
                handleMouseCursor('wait')
                if (id) {
                  await deleteClient(id)
                }
                handleMouseCursor('default')
              }}
              className="button-confirm"
            >
              Excluir
            </button>
          </ButtonContainer>
        </Content>
      </Container>
    </Modal>
  )
}
