import { useState } from "react";

import type { NavigationState, UseNavigation } from "./useNavigation.types";

export const useNavigation = <P extends string>(initialPage: P): UseNavigation<P> => {
  const [{ currentPage, pageHistory }, setState] = useState<NavigationState<P>>({
    currentPage: initialPage,
    pageHistory: [initialPage],
  });

  const navigateTo = <K extends P>(page: K): void => {
    if (page === currentPage) return;
    setState((prevState) => ({
      currentPage: page,
      pageHistory: [...prevState.pageHistory, page],
    }));
  };

  const goBack = (): void => {
    if (pageHistory.length <= 1) return;
    setState((prevState) => {
      const pageHistory = [...prevState.pageHistory];
      pageHistory.pop();
      const currentPage = pageHistory[pageHistory.length - 1] ?? prevState.currentPage;
      return { currentPage, pageHistory };
    });
  };

  return { navigateTo, goBack, page: currentPage };
};
