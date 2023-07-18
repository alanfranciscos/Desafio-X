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

type MapProps = {
  width: string;
  height: string;
  center: LatLngTuple;
  zoom: number;
  setPosition: Function;
  listItens: Array<ClientProps> | null;
  loading: boolean;
  error: boolean;
};
