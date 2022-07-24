import type { FC } from "react";
import type PanelGridProps from "./PanelGrid.types";
import type { PanelGridData } from "./PanelGrid.types";
import StyledPanelGrid from "./PanelGrid.style";
import Text from "../Text/Text";

const PanelGrid: FC<PanelGridProps> = ({
  content,
}: PanelGridProps): JSX.Element => {
  return (
    <StyledPanelGrid>
      {content.map((item: PanelGridData, index) => {
        return (
          <>
            <Text key={index + 1}>{item[0]}</Text>
            <Text key={index + 2} style={{ color: "#aaa" }}>
              {item[1]}
            </Text>
          </>
        );
      })}
    </StyledPanelGrid>
  );
};

export default PanelGrid;
