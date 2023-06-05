import { useState } from "react";
import { Header } from "../Header";
import { SideBar } from "../Sidebar";
import { Container, Content, PageContainer } from "./styles";

export const Layout = ({ children }: { children: any }) => {
  const [sideBarIsOpen, setsideBarIsOpen] = useState(undefined);

  return (
    <Container data-testid="layout">
      <Header setsideBarIsOpen={setsideBarIsOpen}/>
      <PageContainer data-testid="layout-content">
        <SideBar sideBarIsOpen={sideBarIsOpen}/>
        <Content data-testid="layout-content-content">{children}</Content>
      </PageContainer>
    </Container>
  );
};
