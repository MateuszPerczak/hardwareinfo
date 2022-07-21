import type { FC } from "react";
import type NavButtonProps from "./NavButton.types";
import { StyledNavButton, StyledNavHeader } from "./NavButton.style";
import Icon from "../Icon/Icon";

const NavButton: FC<NavButtonProps> = ({
  icon,
  header,
  ...rest
}: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton {...rest}>
      <Icon>{icon}</Icon>
      <StyledNavHeader>{header}</StyledNavHeader>
    </StyledNavButton>
  );
};

export default NavButton;
