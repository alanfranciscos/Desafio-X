import React from 'react'

import { screen, render } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import { Layout } from '.'
import { queryClient } from '../../services/queryClient'

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('Layout test', () => {
  it('should render the Layout correctly', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <></>
          </Layout>
        </QueryClientProvider>
      </BrowserRouter>
    )
  })

  it('should render the header component correctly', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <></>
          </Layout>
        </QueryClientProvider>
      </BrowserRouter>
    )
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('should render the content container correctly', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <></>
          </Layout>
        </QueryClientProvider>
      </BrowserRouter>
    )
    expect(screen.getByTestId('layout-content')).toBeInTheDocument()
  })

  it('should render the sidebar correctly', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <></>
          </Layout>
        </QueryClientProvider>
      </BrowserRouter>
    )
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('should render the layout content section correctly', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <></>
          </Layout>
        </QueryClientProvider>
      </BrowserRouter>
    )
    expect(screen.getByTestId('layout-content-content')).toBeInTheDocument()
  })
})
