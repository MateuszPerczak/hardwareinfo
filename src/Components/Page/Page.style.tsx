import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledPageHeader = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 75px;
  padding-left: 20px;
  flex: 1;
  font-size: 1.5rem;
`;

export const StyledPageContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  height: calc(100% - 75px);
  overflow-y: scroll;
  overflow-x: hidden;
`;

const StyledPage = styled.div`
  width: calc(100% - 49px);
`;

export default StyledPage;
