import styled from "@emotion/styled";
import { m } from "framer-motion";

export const StyledPage = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  .page-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 50px;
    border-bottom: 1px solid ${({ theme: { pageBorder } }): string => pageBorder};
    padding: 0 10px;
  }
  .toolbar-name {
    font-size: 20px;
    font-weight: 400;
  }
  .toolbar-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export const StyledPageContent = styled(m.section)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px 2px 10px 10px;
`;
