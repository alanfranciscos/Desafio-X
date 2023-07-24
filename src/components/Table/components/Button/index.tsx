import React from 'react'

import { ButtonContainer } from './styles'
import { ButtonTypes } from './types'

export const Button = ({ children, openModal }: ButtonTypes) => {
  return (
    <ButtonContainer onClick={(e) => openModal(e)}>{children}</ButtonContainer>
  )
}
