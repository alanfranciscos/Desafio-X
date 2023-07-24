import React from 'react'

import { Container } from './styles'
import { DeleteClientProps } from './types'
import { DeleteClientModal } from '../../../../components/Client/Delete'

export const DeleteClient = ({
  idSelected,
  deleteIsOpen,
  setDeleteIsOpen
}: DeleteClientProps) => {
  if (deleteIsOpen) {
    return (
      <Container>
        <DeleteClientModal
          modalIsOpen
          setModalIsOpen={(value: boolean) => {
            setDeleteIsOpen(value)
          }}
          id={idSelected}
        />
      </Container>
    )
  }
  return null
}
