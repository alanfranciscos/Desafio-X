import { Header } from "../Header";
import { Content } from "./styles";

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
