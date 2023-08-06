import Icon from "../icon/Icon";
import StyledButton from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const Button = ({ label, icon, size, ...rest }: ButtonProps): JSX.Element => {
  return (
    <StyledButton {...rest}>
      <Icon icon={icon} size={size ?? 12} />
      {label && <span>{label}</span>}
    </StyledButton>
  );
};

export default Button;
