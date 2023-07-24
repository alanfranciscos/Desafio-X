export type RegisterOrEditSaleProps = {
  modalIsOpen: boolean
  saleId: string | null
  setModalIsOpen: any
  title: string
  placeholder: {
    client: string | null
    saleDate: string | null
    situation: string | null
    valueSale: number | null
  }
  placeHolderIsLoading: boolean
  errorEdit: boolean
}
