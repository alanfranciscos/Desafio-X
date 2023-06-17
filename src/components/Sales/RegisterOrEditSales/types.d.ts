export type RegisterOrEditSaleProps = {
  modalIsOpen: boolean;
  setModalIsOpen: Function;
  title: string;
  placeholder: {
    client: string | null;
    saleDate: string | null;
    situation: string | null;
    valueSale: number | null;
  };
  placeHolderIsLoading: boolean;
};
