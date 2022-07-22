import styled from "@emotion/styled";
import type { LinkComponent } from "./Link.types";

const StyledLink: LinkComponent = styled.a`
  font-size: 0.8rem;
  padding-top: 2px;
  color: ${({ theme: { color } }) => color};
`;

export default StyledLink;
