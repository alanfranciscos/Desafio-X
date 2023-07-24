import React from 'react'

import { Title } from './styles'
import { TabTitleProps } from './types'

const TabTitle = ({
  title,
  setSelectedTab,
  index,
  tabIsSelected
}: TabTitleProps) => {
  return (
    <Title tabIsSelected={tabIsSelected}>
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </Title>
  )
}

export default TabTitle
