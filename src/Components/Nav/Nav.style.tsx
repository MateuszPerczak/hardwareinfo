import styled from "@emotion/styled";
import { animated } from "react-spring";

const StyledNav = styled(animated.nav)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 4px;
  height: 100%;
  user-select: none;
  overflow: hidden;
  background-color: ${({ theme: { navigation } }) => navigation};
  border-right: 1px solid ${({ theme: { border } }) => border};
`;

export default StyledNav;
