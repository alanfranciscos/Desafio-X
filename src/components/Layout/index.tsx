import { useState } from "react";
import { Header } from "../Header";
import { SideBar } from "../Sidebar";
import { Content } from "./styles";

export const Layout = ({ children }: { children: any }) => {
  const [sideBarIsOpen, setsideBarIsOpen] = useState(false);

  return (
    <>
      <Header setsideBarIsOpen={setsideBarIsOpen} />
      {sideBarIsOpen ? <SideBar /> : null}
      <Content>{children}</Content>
    </>
  );
};
