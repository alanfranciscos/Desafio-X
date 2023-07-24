export const cnpjToNumbers = (cnpj: string | null) => {
  if (cnpj === null) {
    return ''
  }
  return cnpj?.replace(/\D/g, '')
}

export const numbersToCnpj = (numbers: string) => {
  return numbers.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    '$1.$2.$3/$4-$5'
  )
}
