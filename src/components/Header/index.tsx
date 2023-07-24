import React from 'react'

import { IoPersonCircleOutline } from 'react-icons/io5'
import { MdOutlineExitToApp } from 'react-icons/md'

import { Container, UserInfoContainer } from './styles'
import { HeaderTypes } from './types'
import logo from '../../assets/logo.svg'

export const Header = ({ setsideBarIsOpen }: HeaderTypes) => {
  return (
    <Container data-testid="header">
      <div>
        <img
          data-testid="header-logo"
          src={logo}
          alt="logo"
          onClick={() =>
            /*
            Aqui, pegamos o estado anterior e dizemos que ele vale o inverso.
            Pegamos por prevState pra que não precisassemos passar por parâmetro também o estado atual.
            */
            setsideBarIsOpen((prevSidebarIsOpen: boolean) => !prevSidebarIsOpen)
          }
        />
      </div>
      <UserInfoContainer data-testid="header-user">
        <div>
          <IoPersonCircleOutline
            className="personIcon"
            data-testid="header-user-person-icon"
          />
        </div>
        <div className="textContainer" data-testid="header-user-info">
          <h2>João Da Silva</h2>
          <p>Admnistador</p>
        </div>
        <div>
          <MdOutlineExitToApp
            className="exitIcon"
            data-testid="header-user-logout-icon"
          />
        </div>
      </UserInfoContainer>
    </Container>
  )
}
