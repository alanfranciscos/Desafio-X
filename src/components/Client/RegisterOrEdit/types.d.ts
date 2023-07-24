export type RegisterOrEditClientTypes = {
  modalIsOpen: boolean
  setModalIsOpen: any
  title: string
  placeholder: {
    name: string
    cnpj: string
    phone: string
    email: string
    state: string
    location: LatLngTuple | null
  }
  placeHolderIsLoading: boolean
  error: boolean
}
