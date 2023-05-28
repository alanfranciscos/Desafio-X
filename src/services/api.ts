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
  get: (page: number, sortColumn: String) =>
    api.get(`/clients?page=${page}&sortColumn=${sortColumn}`),
  create: (data: ClientProps) => api.post("/clients", data),
};

export const IBGE_API = {
  getStates: () => api.get("/states"),
  getMetadata: (id: string) => api.get(`states/${id}/metadados`),
};
