import type { FC, PropsWithChildren } from "react";

import StyledLink from "./Link.style";

const Link: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <StyledLink>{children}</StyledLink>;
};

export default Link;
