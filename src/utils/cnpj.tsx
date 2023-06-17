// Função para converter CNPJ para somente números
export const cnpjToNumbers = (cnpj: string | null) => {
  // Remove todos os caracteres não numéricos
  if (cnpj === null) {
    return "";
  }
  return cnpj?.replace(/\D/g, "");
};

// Função para converter números para CNPJ
export const numbersToCnpj = (numbers: string) => {
  // Adiciona a formatação do CNPJ (NN.NNN.NNN/NNNN-NN)
  return numbers.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
};
