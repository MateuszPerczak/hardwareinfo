import styled from "@emotion/styled";
import type {
  PanelHeaderComponent,
  PanelHeaderTextComponent,
} from "./PanelHeader.types";

const StyledPanelHeader: PanelHeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px 15px;
`;

export const StyledPanelHeaderText: PanelHeaderTextComponent = styled.span`
  font-size: 0.8rem;
  padding-top: 2px;
`;

export default StyledPanelHeader;
