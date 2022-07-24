import styled from "@emotion/styled";
import type { PanelHeaderComponent } from "./PanelHeader.types";

const StyledPanelHeader: PanelHeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px 15px;
`;

export const StyledPanelHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export default StyledPanelHeader;
