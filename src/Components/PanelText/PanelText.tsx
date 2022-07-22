import type { FC } from "react";
import type PanelTextProps from "./PanelText.types";
import StyledPanelText from "./PanelText.style";
import Text from "../Text/Text";

const PanelText: FC<PanelTextProps> = ({ header, children }): JSX.Element => {
  return (
    <StyledPanelText>
      <Text>{header}</Text>
      {children}
    </StyledPanelText>
  );
};

export default PanelText;
