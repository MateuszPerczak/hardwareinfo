import type { FC } from "react";
import type PanelHeaderProps from "./PanelHeader.types";
import StyledPanelHeader, { StyledPanelHeaderText } from "./PanelHeader.style";
import Icon from "../Icon/Icon";

const PanelHeader: FC<PanelHeaderProps> = ({
  icon,
  header,
}: PanelHeaderProps): JSX.Element => {
  return (
    <StyledPanelHeader>
      <Icon>{icon}</Icon>
      <StyledPanelHeaderText>{header}</StyledPanelHeaderText>
    </StyledPanelHeader>
  );
};

export default PanelHeader;
