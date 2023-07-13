export type TablePropsType = {
  data: any[];
  dataKeys: String[];
  filter: FilterPropsType;
  setFilter: Function;
  numberOfPages: number;
  totalElements: number;
  id: string;
  error: boolean;
  loading: boolean;
  actionButton: {
    edit: Function;
    delete: Function;
  } | null;
  setItemSelected: Function;
};
