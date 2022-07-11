import styled from "@emotion/styled";

export const StyledNavButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  height: 36px;
  padding-left: 12px;
  border-radius: 10px;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { hamburger } }) => hamburger};
  }
  &:active {
    background-color: transparent;
  }
`;

export const StyledNavHeader = styled.span`
  font-size: 0.8rem;
  padding-top: 2px;
`;
