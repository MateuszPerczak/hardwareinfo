import styled from "@emotion/styled";

export const StyledDataPanel = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  user-select: text;
  .data-value {
    color: ${({ theme: { textSecondary } }): string => textSecondary};
    user-select: text;
  }
`;
