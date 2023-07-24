import React from 'react'

import { useQuery } from 'react-query'

import { ButtonContainer, Container, Content } from './styles'
import { VerticalBarChart } from '../../../../components/charts/VerticalBarChart'
import { StatusRequest } from '../../../../components/StatusRequest'
import { Table } from '../../../../components/Table'
import { REPORTS_API } from '../../../../services/api'
import { formatCurrencyNumber } from '../../../../utils/formatCurrencyNumber'

export const BeelingPerMoth = () => {
  const { data, isError, isLoading, isFetching } = useQuery(
    ['Reports - sales'],
    async () => {
      const { data } = await REPORTS_API.getSalesPerMonth()
      return data
    }
  )

  const {
    data: dataDownload,
    isError: isErrorDownload,
    isLoading: isLoadingDownload,
    isFetching: isFetchingDownload
  } = useQuery(['Reports - sales - downloader'], async () => {
    const { data } = await REPORTS_API.getSalesPerMonthDownloader()
    return data
  })

  const csvFile = () => {
    const blob = new Blob([dataDownload], {
      type: 'text/csv;charset=utf-8'
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Vendas por mês.csv'
    document.body.appendChild(a)
    a.click()
  }

  if (
    isError ||
    isErrorDownload ||
    isLoading ||
    isLoadingDownload ||
    isFetching ||
    isFetchingDownload
  ) {
    return (
      <Container>
        <StatusRequest
          error={isError || isErrorDownload}
          loading={
            isLoading || isLoadingDownload || isFetching || isFetchingDownload
          }
        />
      </Container>
    )
  }
  return (
    <Container>
      <Content>
        <VerticalBarChart
          dataKeys={{ xAxis: 'mes', yAxis: 'total' }}
          data={data}
          formatterAxis={{
            xAxis: (value: any) => value.slice(0, 3)
          }}
          tooltipFormatter={{
            value: (value: any) => formatCurrencyNumber(value)
          }}
          isError={isError}
          isLoading={isLoading || isFetching}
        />
        <Table
          error={isError}
          loading={isLoading || isFetching}
          data={data || []}
          dataKeys={['Mês', 'Vendas', 'Total']}
        />
      </Content>

      <ButtonContainer
        disabled={isLoadingDownload || isFetchingDownload || isErrorDownload}
      >
        <div>
          <button
            onClick={csvFile}
            disabled={
              isLoadingDownload || isFetchingDownload || isErrorDownload
            }
          >
            {isLoadingDownload || isFetchingDownload
              ? 'Carregando'
              : isErrorDownload
              ? 'Ocorreu um erro'
              : 'Exportar CSV'}
          </button>
        </div>
      </ButtonContainer>
    </Container>
  )
}
