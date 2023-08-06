import styled from "@emotion/styled";

const StyledButton = styled.button`
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
  background-color: ${({ theme: { fill } }): string => fill};
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  border: 1px solid ${({ theme: { stroke } }): string => stroke};
  transition: background-color 150ms, border 150ms, color 150ms;
  &:disabled {
    color: ${({ theme: { textDisabled } }): string => textDisabled};
    background-color: ${({ theme: { fillDisabled } }): string => fillDisabled};
    border: 1px solid ${({ theme: { strokeDisabled } }): string => strokeDisabled};
  }
  &:hover:not([disabled]) {
    background-color: ${({ theme: { fillHover } }): string => fillHover};
    border: 1px solid ${({ theme: { strokeHover } }): string => strokeHover};
  }
  &:active:not([disabled]) {
    background-color: ${({ theme: { fillActive } }): string => fillActive};
    border: 1px solid ${({ theme: { strokeActive } }): string => strokeActive};
  }
  &:focus-visible {
    outline: 1px solid ${({ theme: { textPrimary } }): string => textPrimary};
  }
`;

export default StyledButton;
