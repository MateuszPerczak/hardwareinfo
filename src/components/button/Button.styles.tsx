import styled from "@emotion/styled";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 35px;
  min-width: 35px;
  padding: 0 10px;
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  line-height: 0;
  background-color: ${({ theme: { buttonBackground } }): string => buttonBackground};
  color: ${({ theme: { buttonColor } }): string => buttonColor};
  border: 1px solid ${({ theme: { buttonBorder } }): string => buttonBorder};
  transition: background-color 150ms, border 150ms, color 150ms;
  &:disabled {
    background-color: ${({ theme: { buttonDisabledBackground } }): string =>
      buttonDisabledBackground};
    color: ${({ theme: { buttonDisabledColor } }): string => buttonDisabledColor};
    border: 1px solid
      ${({ theme: { buttonDisabledBorder } }): string => buttonDisabledBorder};
  }
  &:hover:not([disabled]) {
    background-color: ${({ theme: { buttonHoverBackground } }): string =>
      buttonHoverBackground};
    border: 1px solid ${({ theme: { buttonHoverBorder } }): string => buttonHoverBorder};
  }
  &:active:not([disabled]) {
    background-color: ${({ theme: { buttonActiveBackground } }): string =>
      buttonActiveBackground};
    border: 1px solid ${({ theme: { buttonActiveBorder } }): string => buttonActiveBorder};
  }
  &:focus-visible {
    outline: 1px solid
      ${({ theme: { buttonFocusOutline } }): string => buttonFocusOutline};
  }
`;
