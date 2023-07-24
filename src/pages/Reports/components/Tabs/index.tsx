import React, { useState } from 'react'

import { Content, TabsContainer, TitleContainer } from './styles'
import TabTitle from './TabTitle'
import { TabsProps } from './types'

const Tabs = ({ children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <TabsContainer>
      <TitleContainer>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            tabIsSelected={selectedTab === index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </TitleContainer>
      <Content>{children[selectedTab]}</Content>
    </TabsContainer>
  )
}

export default Tabs
