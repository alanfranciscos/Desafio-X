export type ModalTypes = {
  closeModal: any
  coordinates: CoordinatesType
  actionButton: {
    edit: any
    delete: any
  } | null
}

type CoordinatesType = {
  x: number
  y: number
}
