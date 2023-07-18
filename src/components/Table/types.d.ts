type FilterPropsType = {
  atualPage: number;
  sorted: string;
  sortOrder: string;
};

export type TablePropsType = {
  data: any[];
  dataKeys: String[];
  filter: FilterPropsType | null;
  setFilter: Function;
  numberOfPages: number | null;
  totalElements: number | null;
  id: string | null;
  error: boolean;
  loading: boolean;
  actionButton: {
    edit: Function;
    delete: Function;
  } | null;
  setItemSelected: Function;
  titleTable: string | null;
};
