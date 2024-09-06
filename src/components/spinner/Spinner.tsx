import { StyledSpinner } from "./Spinner.styles";
import SpinnerIcon from "@/icons/spinner.svg?react";

export const Spinner = (): JSX.Element => {
  return (
    <StyledSpinner>
      <div className="spinner">
        <SpinnerIcon />
      </div>
    </StyledSpinner>
  );
};
