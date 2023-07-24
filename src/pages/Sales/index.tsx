import React, { useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import { useQuery } from 'react-query'

import { DeleteSale } from './components/DeleteSale'
import { EditSale } from './components/EditSale'
import {
  Container,
  ContentContainer,
  InputContainer,
  SearchContainer
} from './styles'
import { RegisterOrEditSales } from '../../components/Sales/RegisterOrEditSales'
import { Table } from '../../components/Table'
import { SALES_API } from '../../services/api'

type returnDataProps = {
  cliente: any
  data?: string
  id?: string
  status: string
  valor?: number
}

export const Sales = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [chartData, setChartData] = useState({
    data: [{}],
    totalPages: -1,
    totalElements: -1
  })

  const [tableFilter, setTableFilter] = useState({
    atualPage: 0,
    sorted: 'Cliente',
    sortOrder: 'asc' // asc | desc
  })

  const [inputSearch, setInputSearch] = useState('')
  const [idSearch, setIdSerach] = useState('')

  const { isLoading, isFetching, isError } = useQuery(
    ['clients', tableFilter, idSearch],
    async () => {
      if (!idSearch) {
        const { data } = await SALES_API.get(
          tableFilter?.atualPage,
          tableFilter?.sorted.toLowerCase(),
          tableFilter?.sortOrder
        )

        data?.content?.forEach((element: returnDataProps) => {
          element.cliente = element?.cliente?.nome
          const status = element.status.replace('_', ' ')
          element.status =
            status?.charAt(0).toUpperCase() + status?.slice(1).toLowerCase()
        })

        setChartData({
          ...chartData,
          data: data?.content,
          totalPages: data?.totalPages,
          totalElements: data?.totalElements
        })
      } else {
        const { data } = await SALES_API.getPerClient(
          tableFilter?.atualPage,
          idSearch,
          tableFilter?.sorted.toLowerCase(),
          tableFilter?.sortOrder
        )

        data?.content?.forEach((element: returnDataProps) => {
          element.cliente = element?.cliente?.nome
          const status = element.status.replace('_', ' ')
          element.status =
            status?.charAt(0).toUpperCase() + status?.slice(1).toLowerCase()
        })
        setChartData({
          ...chartData,
          data: data?.content,
          totalPages: data?.totalPages,
          totalElements: data?.totalElements
        })
      }
    }
  )

  const [idSelected, setIdSelected] = useState(null)
  const [editIsOpen, setEditIsOpen] = useState(false)
  const [deleteIsOpen, setDeleteIsOpen] = useState(false)

  const Modals = () => {
    return (
      <>
        <RegisterOrEditSales
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          title="Cadastrar Venda"
        />

        <EditSale
          editIsOpen={editIsOpen}
          setEditIsOpen={setEditIsOpen}
          idSelected={idSelected}
        />

        <DeleteSale
          deleteIsOpen={deleteIsOpen}
          setDeleteIsOpen={setDeleteIsOpen}
          idSelected={idSelected}
        />
      </>
    )
  }

  const sendRequestClient = () => {
    setTableFilter({
      atualPage: 0,
      sorted: 'Cliente',
      sortOrder: 'asc'
    })
    setIdSerach(inputSearch)
  }

  return (
    <Container>
      {Modals()}

      <h1>Lista de Vendas</h1>
      <InputContainer>
        <SearchContainer>
          <input
            placeholder="Digite o nome do cliente que deseja pesquisar"
            onChange={(event) => setInputSearch(event?.target?.value)}
            onKeyDown={(event) => event.key === 'Enter' && sendRequestClient()}
          ></input>
          <button onClick={() => sendRequestClient()}>
            <AiOutlineSearch />
          </button>
        </SearchContainer>
        <button
          className="register"
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          <BsPlusLg />
          &nbsp; Cadastrar venda
        </button>
      </InputContainer>
      <ContentContainer>
        <Table
          error={isError}
          loading={isFetching || isLoading}
          data={chartData?.data}
          numberOfPages={chartData?.totalPages}
          totalElements={chartData?.totalElements}
          dataKeys={['Cliente', 'Data', 'Status', 'Valor']}
          filter={tableFilter}
          setFilter={setTableFilter}
          id="id"
          setItemSelected={setIdSelected}
          actionButton={{
            delete: () => setDeleteIsOpen(true),
            edit: () => setEditIsOpen(true)
          }}
          titleTable="Vendas cadastradas"
        />
      </ContentContainer>
    </Container>
  )
}
