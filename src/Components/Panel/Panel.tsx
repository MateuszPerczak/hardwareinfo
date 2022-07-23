import styled from "@emotion/styled";
import type PanelComponent from "./Panel.types";

const Panel: PanelComponent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${({ theme: { panel } }) => panel};
  box-shadow: 0 0 5px ${({ theme: { shadow } }) => shadow};
`;

export default Panel;
