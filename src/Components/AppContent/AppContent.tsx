import { FC, useState } from "react";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Nav from "../Nav/Nav";

const AppContent: FC = (): JSX.Element => {
  const [page, setPage] = useState("Home");

  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
};

export default AppContent;
