import styled from "@emotion/styled";
import type { NavButtonComponent } from "./NavButton.types";

export const StyledNavButton: NavButtonComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  min-height: 36px;
  padding-left: 12px;
  border-radius: 8px;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { hamburger } }) => hamburger};
  }
  &:active {
    background-color: ${({ theme: { navigation } }) => navigation};
  }
`;
