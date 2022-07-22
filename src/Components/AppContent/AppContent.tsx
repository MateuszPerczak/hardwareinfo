import type { FC } from "react";
import { useState, useMemo } from "react";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Nav from "../Nav/Nav";
import { AnimatePresence } from "framer-motion";
import { routes } from "../../Routes/routes";

import Error from "../../Pages/Error";

const AppContent: FC = (): JSX.Element => {
  const [page, setPage] = useState(1);

  const Page: FC = useMemo(() => {
    return routes.find((route) => route.id === page)?.page || Error;
  }, [page]);

  return (
    <>
      <GlobalStyle />
      <Nav setPage={setPage} />
      <AnimatePresence>
        <Page />
      </AnimatePresence>
    </>
  );
};

export default AppContent;
