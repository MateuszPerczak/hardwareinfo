import styled from "@emotion/styled";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 210px;
  height: 100%;
  border-right: 1px solid ${({ theme: { stroke } }): string => stroke};
  padding: 10px;
`;
