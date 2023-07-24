import React from 'react'

import { useQuery } from 'react-query'

import { Container } from './styles'
import { EditSaleProps } from './types'
import { RegisterOrEditSales } from '../../../../components/Sales/RegisterOrEditSales'
import { SALES_API } from '../../../../services/api'

export const EditSale = ({
  idSelected,
  editIsOpen,
  setEditIsOpen
}: EditSaleProps) => {
  const { data, isLoading, isFetching, isError } = useQuery(
    ['clients', idSelected],
    async () => {
      const { data } = await SALES_API.getPerId(idSelected)
      return data
    }
  )

  if (editIsOpen) {
    return (
      <Container>
        <RegisterOrEditSales
          modalIsOpen
          setModalIsOpen={(value: boolean) => {
            setEditIsOpen(value)
          }}
          title="Editar Venda"
          placeholder={{
            client: data?.cliente?.cnpj,
            saleDate: data?.data,
            situation: data?.status,
            valueSale: data?.valor
          }}
          saleId={idSelected}
          placeHolderIsLoading={isLoading || isFetching}
          errorEdit={isError}
        />
      </Container>
    )
  }
  return null
}
