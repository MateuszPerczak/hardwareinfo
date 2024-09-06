import { Icon } from "@/components";

import { StyledNavButton } from "./NavButton.styles";
import type { NavButtonProps } from "./NavButton.types";

export const NavButton = ({
  label,
  onClick,
  selected,
  ...iconProps
}: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton onClick={onClick} selected={selected}>
      <Icon {...iconProps} />
      <span className="button-label">{label}</span>
    </StyledNavButton>
  );
};
