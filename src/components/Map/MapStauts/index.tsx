import React from 'react'

import { Container } from './styles'
import { MapStatusProps } from './types'
import { StatusRequest } from '../../StatusRequest'

export const MapStatus = ({ error, loading }: MapStatusProps) => {
  if (error || loading) {
    return <StatusRequest error={error} loading={loading} />
  }
  return (
    <Container>
      <span>Selecione uma opção para habilitar o mapa</span>
    </Container>
  )
}
