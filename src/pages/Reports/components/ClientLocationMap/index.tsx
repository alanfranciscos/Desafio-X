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

  console.log(data);

  return (
    <Container>
      <Content>
        <Map listItens />
      </Content>
    </Container>
  );
};
