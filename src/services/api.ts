import axios from "axios";

const baseURL = "http://localhost:4000/";

export const apiUrl = baseURL;

type ClientProps = {
  nome: string;
  cnpj: string;
  telefone: string;
  estado: string;
  email: string;
  location: {
    x: number;
    y: number;
  };
};

export const api = axios.create({
  baseURL: baseURL,
});

export const CLIENTS_API = {
  get: (page: number, sortColumn: String, sortOrder: string) =>
    api.get(
      `/clients?page=${page}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
    ),
  getPerCNPJ: (id: string) => api.get(`/clients/${id}`),
  create: (data: ClientProps) => api.post("/clients", data),
  edit: (id: string, data: ClientProps) => api.put(`/clients/${id}`, data),
  delete: (id: string) => api.delete(`clients/${id}`),
};

export const IBGE_API = {
  getStates: () => api.get("/states"),
  getMetadata: (id: string) => api.get(`states/${id}/metadados`),
};
