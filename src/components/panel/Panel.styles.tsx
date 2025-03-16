import styled from "@emotion/styled";
import { m } from "framer-motion";

import { StyledButton } from "../button/Button.styles";

export const StyledPanel = styled(m.div)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { panelBackground } }): string => panelBackground};
  color: ${({ theme: { panelHeaderColor } }): string => panelHeaderColor};
  border: 1px solid ${({ theme: { panelBorder } }): string => panelBorder};
  border-radius: 4px;
  .panel-header {
    display: flex;
    flex: 0 0 50px;
    gap: 10px;
    justify-content: space-between;
    padding: 0 10px 0 16px;
  }
  .panel-header-info {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
  }
  .panel-header-description {
    font-size: 12px;
    color: ${({ theme: { panelHeaderDescriptionColor } }): string =>
      panelHeaderDescriptionColor};
  }
  .panel-header-children {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .panel-children {
    display: flex;
    flex-direction: column;
    border-top: 1px solid
      ${({ theme: { panelChildrenBorder } }): string => panelChildrenBorder};
  }
  .panel-children > *:not(:last-child) {
    border-bottom: 1px solid
      ${({ theme: { panelChildrenBorder } }): string => panelChildrenBorder};
  }
  ${StyledButton} {
    height: 33px;
  }
`;
