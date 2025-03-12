import { useMemo } from "react";

import type { Page, PageRendererProps } from "./PageRenderer.types";

export const PageRenderer = <P extends string>({
  page,
  pages,
  fallback,
  ...rest
}: PageRendererProps<P>): JSX.Element => {
  const Component = useMemo((): Page<P> => {
    if (page in pages) return pages[page];
    return () => fallback;
  }, [page, pages]);

  return <Component {...rest} key={page} />;
};
