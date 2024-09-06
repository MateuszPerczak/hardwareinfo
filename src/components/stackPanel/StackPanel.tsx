import type { PropsWithChildren } from "react";

import { StyledStackPanel } from "./StackPanel.styles";
import type { StackPanelProps } from "./StackPanel.types";

export const StackPanel = ({
  children,
  ...rest
}: PropsWithChildren<StackPanelProps>): JSX.Element => {
  return <StyledStackPanel {...rest}>{children}</StyledStackPanel>;
};
