import React from 'react'

import { ViewMakersProps } from './types'
import { Maker } from '..'

export const ViewMakers = ({ listItens }: ViewMakersProps) => {
  return (
    <>
      {listItens?.map((element) => (
        <Maker
          location={[element.location.x, element.location.y]}
          key={element.cnpj}
          extraData={element}
        />
      ))}
    </>
  )
}
