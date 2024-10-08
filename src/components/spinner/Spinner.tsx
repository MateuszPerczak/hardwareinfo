import { StyledSpinner } from "./Spinner.styles";

export const Spinner = (): JSX.Element => {
  return (
    <StyledSpinner>
      <div className="spinner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          width={30}
        >
          <path d="M496 256C496 294.266 486.781 332.312 469.312 366.062C465.062 374.312 456.656 379.031 447.969 379.031C444.281 379.031 440.5 378.187 436.969 376.344C425.187 370.25 420.594 355.781 426.687 344C440.844 316.672 448 287.062 448 256C448 150.125 361.875 64 256 64C242.75 64 232 53.25 232 40S242.75 16 256 16C388.344 16 496 123.656 496 256Z" />
        </svg>
      </div>
    </StyledSpinner>
  );
};
