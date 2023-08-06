import styled from "@emotion/styled";

import type { StackPanelProps } from "./StackPanel.types";

const StyledStackPanel = styled.div<StackPanelProps>`
  display: flex;
  flex: ${({ flex }): StackPanelProps["flex"] => flex ?? 0};
  flex-direction: ${({ flexDirection }): StackPanelProps["flexDirection"] =>
    flexDirection ?? "row"};
  gap: ${({ gap }): StackPanelProps["gap"] => gap ?? 0}px;
  flex-wrap: ${({ flexWrap }): StackPanelProps["flexWrap"] => flexWrap ?? "nowrap"};
  align-items: ${({ alignItems }): StackPanelProps["alignItems"] =>
    alignItems ?? "flex-start"};
  justify-content: ${({ justifyContent }): StackPanelProps["justifyContent"] =>
    justifyContent ?? "flex-start"};
  padding: ${({ padding }): StackPanelProps["padding"] => {
    if (typeof padding === "number") {
      return `${padding}px`;
    }
    return padding ?? 0;
  }};
`;

export default StyledStackPanel;
