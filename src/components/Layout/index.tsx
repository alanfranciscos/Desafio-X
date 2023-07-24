import React from 'react'
import { useState } from 'react'

import { Container, Content, PageContainer } from './styles'
import { LayoutTypes } from './types'
import { Header } from '../Header'
import { SideBar } from '../Sidebar'

export const Layout = ({ children }: LayoutTypes) => {
  const [sideBarIsOpen, setsideBarIsOpen] = useState(undefined)

  return (
    <Container data-testid="layout">
      <Header setsideBarIsOpen={setsideBarIsOpen} />
      <PageContainer data-testid="layout-content">
        <SideBar
          sideBarIsOpen={sideBarIsOpen}
          setsideBarIsOpen={setsideBarIsOpen}
        />
        <Content data-testid="layout-content-content">{children}</Content>
      </PageContainer>
    </Container>
  )
}
