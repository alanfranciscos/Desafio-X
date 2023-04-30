import { Header } from "../Header";

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
