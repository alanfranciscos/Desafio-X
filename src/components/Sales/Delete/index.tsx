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
import { DeleteSalesProps } from './types'
import { SALES_API } from '../../../services/api'

export const DeleteSaleModal = ({
  modalIsOpen,
  setModalIsOpen,
  id
}: DeleteSalesProps) => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(document?.getElementById('modal'))

  useEffect(() => {
    setModal(document?.getElementById('modal'))
  }, [modalIsOpen])

  const deleteClient = async (id: string) => {
    SALES_API.delete(id).then(() => navigate(0))
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
          <h3>Excluir Venda</h3>
        </TitleContainer>
        <Content>
          <p>Deseja excluir esta venda? Esta ação é irreversível.</p>
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
                if (id) {
                  await deleteClient(id)
                }
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
