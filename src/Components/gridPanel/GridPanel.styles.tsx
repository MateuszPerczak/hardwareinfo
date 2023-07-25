import styled from "@emotion/styled";

import type { GridPanelProps } from "./GridPanel.types";

const StyledGridPanel = styled.div<GridPanelProps>`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;
  padding: ${({ padding }): GridPanelProps["padding"] => {
    if (typeof padding === "number") {
      return `${padding}px`;
    }
    return padding ?? 0;
  }};
  font-size: 14px;
  font-weight: 300;
  .grid-name {
    color: ${({ theme: { textPrimary } }): string => textPrimary};
    user-select: text;
  }
  .grid-value {
    color: ${({ theme: { textSecondary } }): string => textSecondary};
    user-select: text;
  }
`;

export default StyledGridPanel;
