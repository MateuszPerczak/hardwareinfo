import { StyledLoader } from "./Loader.styles";

export const Loader = (): JSX.Element => {
  return (
    <StyledLoader>
      <div className="loader-wrapper">
        <img src="./icon.png" className="loader-icon" />
        <span className="loader-text">HardwareInfo</span>
      </div>
    </StyledLoader>
  );
};
