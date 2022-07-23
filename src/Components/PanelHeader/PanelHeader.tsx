import type { FC } from "react";
import type PanelHeaderProps from "./PanelHeader.types";
import StyledPanelHeader from "./PanelHeader.style";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

const PanelHeader: FC<PanelHeaderProps> = ({
  icon,
  header,
}: PanelHeaderProps): JSX.Element => {
  return (
    <StyledPanelHeader>
      <Icon>{icon}</Icon>
      <Text>{header}</Text>
    </StyledPanelHeader>
  );
};

export default PanelHeader;
