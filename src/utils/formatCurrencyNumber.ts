export const formatCurrencyNumber = (value: number) => {
  return value?.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
