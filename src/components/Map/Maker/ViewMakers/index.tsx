import { Maker } from "..";

export const ViewMakers = ({
  listItens,
}: {
  listItens: Array<ClientProps>;
}) => {
  return (
    <>
      {listItens?.map((element) => (
        <Maker
          location={[element.location.x, element.location.y]}
          key={element.cnpj}
          extraData={element}
        />
      ))}
    </>
  );
};
