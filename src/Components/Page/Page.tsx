import type { FC } from "react";
import type PageProps from "./Page.types";
import StyledPage, { StyledPageHeader, StyledPageContent } from "./Page.style";

const Page: FC<PageProps> = ({ children, header }): JSX.Element => {
  return (
    <StyledPage>
      <StyledPageHeader
        initial={{ opacity: 0, transform: "translateX(100px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ type: "spring", mass: 0.2, stiffness: 200, damping: 20 }}
      >
        {header}
      </StyledPageHeader>
      <StyledPageContent
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        exit={{ opacity: 0, transform: "translateY(100px)" }}
        transition={{ type: "spring", mass: 0.2, stiffness: 200, damping: 20 }}
        layoutScroll
      >
        {children}
      </StyledPageContent>
    </StyledPage>
  );
};

export default Page;
