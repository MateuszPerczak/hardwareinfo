import styled from "@emotion/styled";

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  .label {
    font-size: 14px;
  }
  .description {
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme: { textSecondary } }): string => textSecondary};
  }
`;

export default StyledLabel;
