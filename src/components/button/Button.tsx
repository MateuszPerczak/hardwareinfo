import { Icon } from "@/components/index";

import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = ({ label, icon, size, ...rest }: ButtonProps): JSX.Element => {
  return (
    <StyledButton {...rest}>
      <Icon icon={icon} size={size ?? 12} />
      {label && <span>{label}</span>}
    </StyledButton>
  );
};
