import styled from "@emotion/styled";
import type { PanelGridComponent } from "./PanelGrid.types";
import Text from "../Text/Text";

const StyledPanelGrid: PanelGridComponent = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;
  padding-left: 26px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme: { info } }) => info};
`;

export default StyledPanelGrid;
