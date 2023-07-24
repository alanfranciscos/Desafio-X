import React from 'react'

import { LatLngTuple } from 'leaflet'

import { CreateMakerTypes } from './types'
import { Maker } from '..'

export const CreateMaker = ({ location, setLocation }: CreateMakerTypes) => {
  return (
    <Maker
      location={location}
      setPosition={(value: LatLngTuple) => {
        setLocation(value)
      }}
    />
  )
}
