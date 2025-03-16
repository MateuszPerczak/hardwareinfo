import styled from "@emotion/styled";

import type { NavButtonProps } from "./NavButton.types";

export const StyledNavButton = styled.button<Pick<NavButtonProps, "selected">>`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 35px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  background-color: ${({
    theme: { navButtonBackground, navButtonSelectedBackground },
    selected,
  }): string => (selected ? navButtonSelectedBackground : navButtonBackground)};
  color: ${({ theme: { navButtonColor } }): string => navButtonColor};
  transition: background-color 150ms, border 150ms;
  .button-label {
    font-weight: 400;
    font-size: 12px;
  }
  &:hover {
    background-color: ${({ theme: { navButtonHoverBackground } }): string =>
      navButtonHoverBackground};
  }
  &:active {
    background-color: ${({ theme: { navButtonActiveBackground } }): string =>
      navButtonActiveBackground};
  }
`;
