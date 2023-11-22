import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import useNavigation from "@/hooks/useNavigation/useNavigation";
import { type Pages, pages } from "@/pages/pages";
import useInformation from "@/stores/information/information";

import GlobalStyle from "../globalStyle/GlobalStyle";
import Loader from "../loader/Loader";
import Nav from "../nav/Nav";
import PageRenderer from "../pageRenderer/PageRenderer";

const AppContent = (): JSX.Element => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);

  const navigation = useNavigation<Pages>("home");

  const { updateProcessor, updateMemory, updateMemoryModules } = useInformation(
    ({ updateProcessor, updateMemory, updateMemoryModules }) => ({
      updateProcessor,
      updateMemory,
      updateMemoryModules,
    }),
  );

  useEffect(() => {
    (async (): Promise<void> => {
      await updateProcessor();
      await updateMemory();
      await updateMemoryModules();
      setIsAppLoading(false);
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      {isAppLoading && <Loader />}
      <Nav {...navigation} />
      <main>
        <AnimatePresence initial={false}>
          <PageRenderer<Pages> {...navigation} pages={pages} fallback={<>Error</>} />
        </AnimatePresence>
      </main>
    </>
  );
};

export default AppContent;
