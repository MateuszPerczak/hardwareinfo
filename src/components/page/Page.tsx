import { AnimatePresence } from "framer-motion";

import { pageVariant } from "./Page.animations";
import { StyledPage, StyledPageContent } from "./Page.styles";
import type { PageProps } from "./Page.types";

export const Page = ({ menu, name, content }: PageProps): JSX.Element => {
  return (
    <StyledPage>
      {(menu || name) && (
        <menu className="page-toolbar">
          {name && <span className="toolbar-name">{name}</span>}
          {menu && (
            <div className="toolbar-content">
              <AnimatePresence initial={false}>{menu}</AnimatePresence>
            </div>
          )}
        </menu>
      )}
      <StyledPageContent initial="initial" animate="animate" variants={pageVariant}>
        {content}
      </StyledPageContent>
    </StyledPage>
  );
};
