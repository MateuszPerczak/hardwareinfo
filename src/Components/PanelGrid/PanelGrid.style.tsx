import styled from "@emotion/styled";
import type { PanelGridComponent } from "./PanelGrid.types";

const StyledPanelGrid: PanelGridComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  padding-left: 26px;
`;

export default StyledPanelGrid;
