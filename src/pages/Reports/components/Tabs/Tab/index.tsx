import React from 'react'

import { Container } from './styles'
import { TabProps } from './types'

export const Tab = ({ children, title }: TabProps) => {
  return <Container title={title}>{children}</Container>
}
