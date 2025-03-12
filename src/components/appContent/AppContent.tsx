import { GlobalStyle, Nav, PageRenderer } from "@/components/index";
import { useNavigation } from "@/hooks/index";
import { type Pages, pages } from "@/pages/pages";

export const AppContent = (): JSX.Element => {
  const navigation = useNavigation<Pages>("home");

  return (
    <>
      <GlobalStyle />
      <Nav {...navigation} />
      <main>
        <PageRenderer<Pages> {...navigation} pages={pages} fallback={<>Error</>} />
      </main>
    </>
  );
};
