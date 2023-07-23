import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 100%;
  border-right: 1px solid ${({ theme: { stroke } }): string => stroke};
  gap: 10px;
  padding: 10px;
  .nav-separator {
    flex: 1;
  }
`;

export default StyledNav;
