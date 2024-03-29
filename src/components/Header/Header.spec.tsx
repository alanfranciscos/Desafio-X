import React from 'react'

import { screen, render, fireEvent } from '@testing-library/react'

import { Header } from '.'

describe('Header test', () => {
  it('should render the header correctly', () => {
    render(<Header setsideBarIsOpen={() => null} />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('should render the logo', () => {
    render(<Header setsideBarIsOpen={() => null} />)
    expect(screen.getByTestId('header-logo')).toBeInTheDocument()
  })

  it('should render the user container', () => {
    render(<Header setsideBarIsOpen={() => null} />)
    expect(screen.getByTestId('header-user')).toBeInTheDocument()
  })

  it('should render the user components', () => {
    render(<Header setsideBarIsOpen={() => null} />)

    const userIcon = screen.getByTestId('header-user-person-icon')
    const userInfo = screen.getByTestId('header-user-info')
    const logoutIcon = screen.getByTestId('header-user-logout-icon')

    expect(userIcon).toBeInTheDocument()
    expect(userInfo).toBeInTheDocument()
    expect(logoutIcon).toBeInTheDocument()
  })

  it('should handle sidebar open variable', () => {
    let sidebarIsOpen = false

    const handleSideBarIsOpen = () => {
      sidebarIsOpen = !sidebarIsOpen
    }

    render(<Header setsideBarIsOpen={handleSideBarIsOpen} />)

    expect(sidebarIsOpen).toBe(false)

    const logo = screen.getByTestId('header-logo')
    fireEvent.click(logo)

    expect(sidebarIsOpen).toBe(true)
  })
})
