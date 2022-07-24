import type { FC } from "react";
import type PanelHeaderProps from "./PanelHeader.types";
import StyledPanelHeader, {
  StyledPanelHeaderContent,
} from "./PanelHeader.style";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

const PanelHeader: FC<PanelHeaderProps> = ({
  icon,
  header,
  children,
}: PanelHeaderProps): JSX.Element => {
  return (
    <StyledPanelHeader>
      <Icon>{icon}</Icon>
      <Text>{header}</Text>
      <StyledPanelHeaderContent>{children}</StyledPanelHeaderContent>
    </StyledPanelHeader>
  );
};

export default PanelHeader;
