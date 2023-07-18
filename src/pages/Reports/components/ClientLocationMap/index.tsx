import { useQuery } from "react-query";
import { Map } from "../../../../components/Map";
import { REPORTS_API } from "../../../../services/api";
import { Container, Content } from "./styles";

export const ClientLocationMap = () => {
  const { data, isError, isLoading, isFetching } = useQuery(
    ["Reports - clients"],
    async () => {
      const { data } = await REPORTS_API.getClients();
      return data;
    }
  );

  return (
    <Container>
      <Content>
        <Map
          listItens={data}
          error={isError}
          loading={isLoading || isFetching}
        />
      </Content>
    </Container>
  );
};
