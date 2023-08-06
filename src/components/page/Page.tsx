import { AnimatePresence } from "framer-motion";

import StyledPage, { StyledPageContent } from "./Page.styles";
import type { PageProps } from "./Page.types";

const Page = ({ menu, name, content }: PageProps): JSX.Element => {
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
      <StyledPageContent
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.2, ease: [0.2, 0.7, 0, 0.99] }}
      >
        {content}
      </StyledPageContent>
    </StyledPage>
  );
};

export default Page;
