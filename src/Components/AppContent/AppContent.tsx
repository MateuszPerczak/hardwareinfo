import { FC, Suspense } from "react";
import { useState, lazy, useMemo } from "react";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Nav from "../Nav/Nav";
import { AnimatePresence } from "framer-motion";

const AppContent: FC = (): JSX.Element => {
  const [page, setPage] = useState("Home");

  const Component = useMemo(() => {
    return lazy(() => {
      return import(`../../Pages/${page}`);
    });
  }, [page]);

  return (
    <>
      <GlobalStyle />
      <Nav setPage={setPage} />
      <AnimatePresence>
        <Suspense fallback={<></>}>
          <Component />
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default AppContent;
