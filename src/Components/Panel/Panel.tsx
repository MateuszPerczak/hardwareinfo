import styled from "@emotion/styled";
import type PanelComponent from "./Panel.types";

const Panel: PanelComponent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme: { panel } }) => panel};
`;

export default Panel;
