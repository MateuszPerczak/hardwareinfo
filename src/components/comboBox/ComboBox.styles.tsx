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
    background-color: ${({ theme: { comboBoxBackground } }): string =>
      comboBoxBackground};
    color: ${({ theme: { comboBoxColor } }): string => comboBoxColor};
    border: 1px solid ${({ theme: { comboBoxBorder } }): string => comboBoxBorder};
    transition: background-color 150ms, border 150ms, color 150ms;
    &:disabled {
      background-color: ${({ theme: { comboBoxDisabledBackground } }): string =>
        comboBoxDisabledBackground};
      color: ${({ theme: { comboBoxDisabledColor } }): string => comboBoxDisabledColor};
      border: 1px solid
        ${({ theme: { comboBoxDisabledBorder } }): string => comboBoxDisabledBorder};
    }
    &:hover:not([disabled]) {
      background-color: ${({ theme: { comboBoxHoverBackground } }): string =>
        comboBoxHoverBackground};
      border: 1px solid
        ${({ theme: { comboBoxHoverBorder } }): string => comboBoxHoverBorder};
    }
    &:active:not([disabled]) {
      background-color: ${({ theme: { comboBoxActiveBackground } }): string =>
        comboBoxActiveBackground};
      border: 1px solid
        ${({ theme: { comboBoxActiveBorder } }): string => comboBoxActiveBorder};
    }
    &:focus-visible {
      outline: 1px solid
        ${({ theme: { comboBoxFocusOutline } }): string => comboBoxFocusOutline};
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
    background-color: ${({ theme: { comboBoxMenuBackground } }): string =>
      comboBoxMenuBackground};
    border: 1px solid ${({ theme: { comboBoxMenuBorder } }): string => comboBoxMenuBorder};
    border-radius: 4px;
    transform: translateY(-100%);
    animation: menu-open 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards;
  }
  .menu-item {
    display: flex;
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 12px;
    background-color: ${({ theme: { comboBoxMenuItemBackground } }): string =>
      comboBoxMenuItemBackground};
    color: ${({ theme: { comboBoxMenuItemColor } }): string => comboBoxMenuItemColor};
    border: none;
    transition: background-color 150ms, border 150ms, color 150ms;
    &:hover {
      background-color: ${({ theme: { comboBoxMenuItemHoverBackground } }): string =>
        comboBoxMenuItemHoverBackground};
    }
    &:active {
      background-color: ${({ theme: { comboBoxMenuItemActiveBackground } }): string =>
        comboBoxMenuItemActiveBackground};
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
