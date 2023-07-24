type FilterPropsType = {
  atualPage: number
  sorted: string
  sortOrder: string
}

export type TablePropsType = {
  data: any[]
  dataKeys: string[]
  filter: FilterPropsType | null
  setFilter: any
  numberOfPages: number | null
  totalElements: number | null
  id: string | null
  error: boolean
  loading: boolean
  actionButton: {
    edit: any
    delete: any
  } | null
  setItemSelected: any
  titleTable: string | null
}
