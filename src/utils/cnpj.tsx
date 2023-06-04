// Função para converter CNPJ para somente números
export const cnpjToNumbers = (cnpj: string) => {
  // Remove todos os caracteres não numéricos
  return cnpj.replace(/\D/g, "");
};

// Função para converter números para CNPJ
export const numbersToCnpj = (numbers: string) => {
  // Adiciona a formatação do CNPJ (NN.NNN.NNN/NNNN-NN)
  return numbers.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
};

// Exemplo de uso
const cnpj = "51.884.466/3234-75";
const numbers = cnpjToNumbers(cnpj);
console.log(numbers); // Saída: 51884466323475

const convertedCnpj = numbersToCnpj(numbers);
console.log(convertedCnpj); // Saída: 51.884.466/3234-75
