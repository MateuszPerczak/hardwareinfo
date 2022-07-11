import { FC } from "react";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Nav from "../Nav/Nav";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
};

export default AppContent;
