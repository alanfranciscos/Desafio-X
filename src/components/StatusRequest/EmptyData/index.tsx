import React from 'react'

import { Container } from './styles'
import noData from '../../../assets/no_data.svg'

export const EmptyData = () => {
  return (
    <Container>
      <img data-testid="sem-dados" src={noData} alt="sem-dados" />
    </Container>
  )
}
