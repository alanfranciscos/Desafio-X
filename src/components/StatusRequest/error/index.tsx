import React from 'react'

import { Container } from './styles'
import err from '../../../assets/error.svg'

export const Error = () => {
  return (
    <Container>
      <img data-testid="error-data" src={err} alt="error-data" />
    </Container>
  )
}
