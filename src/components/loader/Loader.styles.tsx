import styled from "@emotion/styled";

const StyledLoader = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme: { background } }): string => background};
  z-index: 10;
  .loader-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 20px));
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .loader-icon {
    width: 96px;
  }
  .loader-text {
    color: ${({ theme: { textSecondary } }): string => textSecondary};
  }
  /* .loader-spinner {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, calc(-80%));
  } */
`;

export default StyledLoader;
