import styled from "@emotion/styled";

export const StyledComboBox = styled.div<{ width?: number }>`
  display: flex;
  position: relative;
  min-width: ${({ width }): string => (width ? `${width}px` : "unset")};
  .combobox-button {
    display: inline-flex;
    flex: 1;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 12px;
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
  }
  menu {
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    right: 0;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.132), 0 0px 0px 0 rgba(0, 0, 0, 0.108);
    z-index: 2;
    overflow: hidden;
    animation: menu-shadow 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
  }
  .menu-items-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    background-color: ${({ theme: { fill } }): string => fill};
    border: 1px solid ${({ theme: { stroke } }): string => stroke};
    border-radius: 4px;
    transform: translateY(-100%);
    animation: menu-open 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
  }
  .menu-item {
    display: flex;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 12px;
    background-color: ${({ theme: { fill } }): string => fill};
    color: ${({ theme: { textPrimary } }): string => textPrimary};
    border: none;
    transition: background-color 150ms, border 150ms, color 150ms;
    &:hover {
      background-color: ${({ theme: { fillHover } }): string => fillHover};
    }
    &:active {
      background-color: ${({ theme: { fillActive } }): string => fillActive};
    }
  }
  @keyframes menu-open {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  @keyframes menu-shadow {
    0% {
      box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.132), 0 0px 0px 0 rgba(0, 0, 0, 0.108);
    }
    90% {
      box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.132), 0 0px 0px 0 rgba(0, 0, 0, 0.108);
    }
    100% {
      box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
        0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
    }
  }
`;
