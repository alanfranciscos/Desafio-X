import { useState } from "react";
import { Header } from "../Header";
import { SideBar } from "../Sidebar";
import { Container, Content, PageContainer } from "./styles";

export const Layout = ({ children }: { children: any }) => {
  const [sideBarIsOpen, setsideBarIsOpen] = useState(false);

  return (
    <Container>
      <Header setsideBarIsOpen={setsideBarIsOpen} />
      <PageContainer>
        {sideBarIsOpen ? <SideBar /> : null}
        <Content>{children}</Content>
      </PageContainer>
    </Container>
  );
};
