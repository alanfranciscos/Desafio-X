import React from 'react'

import { EmptyData } from './EmptyData'
import { Error } from './error'
import { Loader } from './Loader'
import { StatusRequestProps } from './types'

export const StatusRequest = ({ loading, error }: StatusRequestProps) => {
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <Error />
  }
  return <EmptyData />
}
