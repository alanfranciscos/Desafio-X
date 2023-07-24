import React from 'react'

import { TbCurrencyDollar } from 'react-icons/tb'
import { useQuery } from 'react-query'

import { BeelingPerMoth } from './components/BillingPerMonth'
import { Card } from './components/Card'
import { ClientLocationMap } from './components/ClientLocationMap'
import Tabs from './components/Tabs'
import { Tab } from './components/Tabs/Tab'
import { Container, ContainerCards } from './styles'
import { REPORTS_API } from '../../services/api'
import { formatCurrencyNumber } from '../../utils/formatCurrencyNumber'

export const Reports = () => {
  const { data, isError, isLoading, isFetching } = useQuery(
    ['Reports - cards'],
    async () => {
      const { data } = await REPORTS_API.getCards()
      return data
    }
  )

  return (
    <Container>
      <h1>Relatórios</h1>
      <ContainerCards>
        <Card
          title="vendas no ano"
          icon={<TbCurrencyDollar />}
          value={formatCurrencyNumber(data?.soma_das_vendas_anual?.valor)}
          loading={isFetching || isLoading}
          error={isError}
        />
        <Card
          title="CLIENTE COM MAIS VENDAS NO MÊS"
          icon={<TbCurrencyDollar />}
          value={data?.cliente_com_maior_vendas_mensal?.valor}
          loading={isFetching || isLoading}
          error={isError}
        />
        <Card
          title="CLIENTE COM MAIOR FATURAMENTO (MÊS)"
          icon={<TbCurrencyDollar />}
          value={` ${
            data?.cliente_com_maior_faturamento_mensal?.cliente
          } (${formatCurrencyNumber(
            data?.cliente_com_maior_faturamento_mensal?.valor
          )})`}
          loading={isFetching || isLoading}
          error={isError}
        />
        <Card
          title="CLIENTE COM MAIOR FATURAMENTO (ANO)"
          icon={<TbCurrencyDollar />}
          value={` ${
            data?.cliente_com_maior_faturamento_anual?.cliente
          } (${formatCurrencyNumber(
            data?.cliente_com_maior_faturamento_anual?.valor
          )})`}
          loading={isFetching || isLoading}
          error={isError}
        />
      </ContainerCards>

      <Tabs>
        <Tab title="Localização de Clientes">
          <ClientLocationMap />
        </Tab>
        <Tab title="Faturamento por mês">
          <BeelingPerMoth />
        </Tab>
      </Tabs>
    </Container>
  )
}
