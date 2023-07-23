import StyledLabel from "./Label.styles";
import type { LabelProps } from "./Label.types";

const Label = ({ label, description }: LabelProps): JSX.Element => {
  return (
    <StyledLabel>
      {label && <span className="label">{label}</span>}
      {description && <span className="description">{description}</span>}
    </StyledLabel>
  );
};

export default Label;
