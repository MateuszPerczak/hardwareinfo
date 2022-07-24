import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { ComboBoxComponent } from "./ComboBox.types";

const StyledComboBox: ComboBoxComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 10px;
  min-width: min(30%, 200px);
  border-radius: 8px;
  user-select: none;
  transition: background-color 200ms;
  background-color: ${({ theme: { button } }) => button};
  box-shadow: 0 0 5px ${({ theme: { shadow } }) => shadow};
  &:hover {
    background-color: ${({ theme: { hover } }) => hover};
  }
`;

export const StyledComboBoxList = styled(motion.div)`
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme: { hover } }) => hover};
  box-shadow: 0 0 5px ${({ theme: { shadow } }) => shadow};
`;

export default StyledComboBox;
