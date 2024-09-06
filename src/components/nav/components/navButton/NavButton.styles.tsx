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
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  background-color: ${({ theme: { background, fill }, selected }): string =>
    selected ? fill : background};
  transition: background-color 150ms, border 150ms;
  .button-label {
    font-weight: 400;
    font-size: 12px;
  }
  &:hover {
    background-color: ${({ theme: { fillHover } }): string => fillHover};
  }
  &:active {
    background-color: ${({ theme: { fillActive } }): string => fillActive};
  }
  .syncing {
    animation: syncing 1s linear infinite;
  }

  @keyframes syncing {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
