import React from 'react'

import { Container } from './styles'
import { CardProps } from './types'
import { StatusRequest } from '../../../../components/StatusRequest'

export const Card = ({ icon, title, value, error, loading }: CardProps) => {
  if (error || loading) {
    return (
      <Container id={title.replace(' ', '_')}>
        <StatusRequest error={error} loading={loading} />
      </Container>
    )
  }
  return (
    <Container id={title.replace(' ', '_')}>
      <span className="title">{title}</span>
      {/* props icon */}
      <div className="value--container">
        {icon}
        <p>{value}</p>
      </div>
    </Container>
  )
}
