import React from 'react'

import { render, screen } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import { SideBar } from '.'
import { queryClient } from '../../services/queryClient'

describe('Sidebar test', () => {
  it('should render the Sidebar correctly', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SideBar sideBarIsOpen={false} setsideBarIsOpen={() => null} />
        </QueryClientProvider>
      </BrowserRouter>
    )

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('should render all titles', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SideBar sideBarIsOpen={false} setsideBarIsOpen={() => null} />
        </QueryClientProvider>
      </BrowserRouter>
    )

    const titles = screen.getAllByTestId('sidebar-title')
    expect(titles).toHaveLength(3)

    expect(titles[0].textContent).toEqual('GESTÃO DE CLIENTES')
    expect(titles[1].textContent).toEqual('GESTÃO DE VENDAS')
    expect(titles[2].textContent).toEqual('RELATÓRIOS')
  })

  it('should render all options', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SideBar sideBarIsOpen={false} setsideBarIsOpen={() => null} />
        </QueryClientProvider>
      </BrowserRouter>
    )

    const lists = screen.getAllByTestId('sidebar-list')
    expect(lists).toHaveLength(3)

    let options = lists[0].getElementsByTagName('button')
    expect(options).toHaveLength(2)
    expect(options[0].textContent).toEqual('Lista de clientes')
    expect(options[1].textContent).toEqual('Cadastrar cliente')

    options = lists[1].getElementsByTagName('button')
    expect(options).toHaveLength(2)
    expect(options[0].textContent).toEqual('Lista de vendas')
    expect(options[1].textContent).toEqual('Cadastrar venda')

    options = lists[2].getElementsByTagName('button')
    expect(options).toHaveLength(1)
    expect(options[0].textContent).toEqual('Relatórios')
  })
})
