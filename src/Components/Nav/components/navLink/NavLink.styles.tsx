import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: default;
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  background-color: ${({ theme: { background } }): string => background};
  text-decoration: none;
  -webkit-user-drag: none;
  transition: background-color 150ms, border 150ms;
  .button-label {
    font-weight: 400;
    font-size: 12px;
  }
  &.active {
    background-color: ${({ theme: { fill } }): string => fill};
  }
  &:hover {
    background-color: ${({ theme: { fillHover } }): string => fillHover};
  }
  &:active {
    background-color: ${({ theme: { fillActive } }): string => fillActive};
  }
`;

export default StyledNavLink;
