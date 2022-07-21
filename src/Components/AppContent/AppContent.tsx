import { FC, useState } from "react";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Nav from "../Nav/Nav";
import { AnimatePresence } from "framer-motion";

import Home from "../../Pages/Home";
import Settings from "../../Pages/Settings";

const AppContent: FC = (): JSX.Element => {
  const [page, setPage] = useState("Home");

  return (
    <>
      <GlobalStyle />
      <Nav setPage={setPage} />
      <AnimatePresence>
        {page === "Home" && <Home />}
        {page === "Processor" && <Settings />}
        {page === "Settings" && <Settings />}
      </AnimatePresence>
    </>
  );
};

export default AppContent;
