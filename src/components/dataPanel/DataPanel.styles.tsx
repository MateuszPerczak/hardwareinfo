import styled from "@emotion/styled";
import type { CSSProperties } from "react";

import type { DataPanelProps } from "./DataPanel.types";

const StyledDataPanel = styled.div<Pick<DataPanelProps<unknown>, "padding">>`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;
  padding: ${({ padding }): CSSProperties["padding"] => {
    if (typeof padding === "number") {
      return `${padding}px`;
    }
    return padding ?? 0;
  }};
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  user-select: text;
  .data-value {
    color: ${({ theme: { textSecondary } }): string => textSecondary};
    user-select: text;
  }
`;

export default StyledDataPanel;
