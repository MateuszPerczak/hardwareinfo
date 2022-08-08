import { FC, Suspense } from "react";
import { useState, lazy, useMemo } from "react";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Nav from "../Nav/Nav";

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
      <Suspense fallback={<></>}>
        <Component />
      </Suspense>
    </>
  );
};

export default AppContent;
