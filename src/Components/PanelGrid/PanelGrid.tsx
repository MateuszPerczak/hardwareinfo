import type { FC } from "react";
import type PanelGridProps from "./PanelGrid.types";
import type { PanelGridData } from "./PanelGrid.types";
import StyledPanelGrid, { StyledText } from "./PanelGrid.style";
import Text from "../Text/Text";

const PanelGrid: FC<PanelGridProps> = ({
  content,
}: PanelGridProps): JSX.Element => {
  return (
    <StyledPanelGrid>
      {content.map((item: PanelGridData, index) => {
        return (
          <>
            <Text key={`header-${index}`}>{item[0]}</Text>
            <StyledText key={`text-${index}`}>{item[1]}</StyledText>
          </>
        );
      })}
    </StyledPanelGrid>
  );
};

export default PanelGrid;
