import React from 'react'

import { Container } from './styles'
import { DeleteSaleProps } from './types'
import { DeleteSaleModal } from '../../../../components/Sales/Delete'

export const DeleteSale = ({
  idSelected,
  deleteIsOpen,
  setDeleteIsOpen
}: DeleteSaleProps) => {
  if (deleteIsOpen) {
    return (
      <Container>
        <DeleteSaleModal
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
