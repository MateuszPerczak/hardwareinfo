import type { FC } from "react";
import type LinkProps from "./Link.types";

import StyledLink from "./Link.style";

const Link: FC<LinkProps> = ({ children, href }): JSX.Element => {
  return (
    <StyledLink href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </StyledLink>
  );
};

export default Link;
