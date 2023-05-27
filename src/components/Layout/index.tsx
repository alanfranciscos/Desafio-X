import { useState } from "react";
import { Header } from "../Header";
import { SideBar } from "../Sidebar";
import { Container, Content, PageContainer } from "./styles";

export const Layout = ({ children }: { children: any }) => {
  const [sideBarIsOpen, setsideBarIsOpen] = useState(undefined);

  return (
    <Container>
      <Header setsideBarIsOpen={setsideBarIsOpen} />
      <PageContainer>
        <SideBar sideBarIsOpen={sideBarIsOpen} />
        <Content>{children}</Content>
      </PageContainer>
    </Container>
  );
};
