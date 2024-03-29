import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

export const apiUrl = baseURL

type ClientProps = {
  nome: string
  cnpj: string
  telefone: string
  estado: string
  email: string
  location: {
    x: number
    y: number
  }
}

export const api = axios.create({
  baseURL: baseURL
})

export const CLIENTS_API = {
  get: (page: number, sortColumn: string, sortOrder: string) =>
    api.get(
      `/clients?page=${page}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
    ),
  getPerCNPJ: (id: string) => api.get(`/clients/${id}`),
  getClientsNames: () => api.get('clients/get-cnpj-and-names'),
  create: (data: ClientProps) => api.post('/clients', data),
  edit: (id: string, data: ClientProps) => api.put(`/clients/${id}`, data),
  delete: (id: string) => api.delete(`clients?id=${id}`)
}

export const IBGE_API = {
  getStates: () => api.get('/states'),
  getMetadata: (id: string) => api.get(`states/${id}/metadados`)
}

type SaleProps = {
  data: string
  status: string
  valor: number
  cliente: string
}

export const SALES_API = {
  get: (page: number, sortColumn: string, sortOrder: string) =>
    api.get(
      `/sales?page=${page}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
    ),
  getPossibleStatus: () => api.get('sales/status'),
  getPerClient: (
    page: number,
    search: string,
    sortColumn: string,
    sortOrder: string
  ) =>
    api.get(
      `/sales/getPerId?page=${page}&search=${search}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
    ),
  getPerId: (id: string | null) => api.get(`sales/${id}`),
  create: (data: SaleProps) => api.post('/sales', data),
  edit: (id: string, data: SaleProps) => api.put(`/sales/${id}`, data),
  delete: (id: string) => api.delete(`sales/${id}`)
}

export const REPORTS_API = {
  getSalesPerMonth: () => api.get('/reports/sales'),
  getSalesPerMonthDownloader: () => api.get('/reports/sales/download-csv'),
  getCards: () => api.get('/reports/cards'),
  getClients: () => api.get('/reports/clients')
}
