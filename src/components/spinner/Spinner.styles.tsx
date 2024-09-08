import styled from "@emotion/styled";

export const StyledSpinner = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  .spinner {
    animation: spin 500ms linear infinite;
    line-height: 0;
  }
  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
