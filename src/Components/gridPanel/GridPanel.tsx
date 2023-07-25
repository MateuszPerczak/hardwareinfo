import type { PropsWithChildren } from "react";

import StyledGridPanel from "./GridPanel.styles";
import type { GridPanelProps } from "./GridPanel.types";

const GridPanel = ({
  children,
  ...rest
}: PropsWithChildren<GridPanelProps>): JSX.Element => {
  return <StyledGridPanel {...rest}>{children}</StyledGridPanel>;
};

export default GridPanel;
