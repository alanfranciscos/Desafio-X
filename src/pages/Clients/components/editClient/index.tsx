import React from 'react'

import { useQuery } from 'react-query'

import { Container } from './styles'
import { EditClientProps } from './types'
import { RegisterOrEditClient } from '../../../../components/Client/RegisterOrEdit'
import { CLIENTS_API } from '../../../../services/api'
import { cnpjToNumbers } from '../../../../utils/cnpj'

export const EditClient = ({
  idSelected,
  editIsOpen,
  setEditIsOpen
}: EditClientProps) => {
  const { data, isLoading, isFetching, isError } = useQuery(
    ['clients', idSelected],
    async () => {
      const { data } = await CLIENTS_API.getPerCNPJ(cnpjToNumbers(idSelected))
      return data
    }
  )

  if (editIsOpen) {
    return (
      <Container>
        <RegisterOrEditClient
          modalIsOpen
          setModalIsOpen={(value: boolean) => {
            setEditIsOpen(value)
          }}
          title="Editar Cliente"
          placeholder={{
            cnpj: data?.cnpj,
            email: data?.email,
            name: data?.nome,
            phone: data?.telefone,
            state: data?.estado,
            location: [data?.location?.x, data?.location?.y]
          }}
          placeHolderIsLoading={isLoading || isFetching}
          error={isError}
        />
      </Container>
    )
  }
  return null
}
