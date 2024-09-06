import { Icon } from "@/components";
import { Icons } from "@/components/icon/Icon.types";

import { StyledNavButton } from "./NavButton.styles";
import type { NavButtonProps } from "./NavButton.types";

export const NavButton = ({
  label,
  onClick,
  selected,
  syncing,
  icon,
  size,
}: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton onClick={onClick} selected={selected}>
      <Icon
        {...(syncing ? { icon: Icons.Sync, className: "syncing" } : { icon, size })}
      />
      <span className="button-label">{label}</span>
    </StyledNavButton>
  );
};
