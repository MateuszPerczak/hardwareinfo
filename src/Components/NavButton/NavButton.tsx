import { FC } from "react";
import { StyledNavButton, StyledNavHeader } from "./NavButton.style";
import Icon from "../Icon/Icon";

type NavButtonProps = {
  icon: string;
  header: string;
};

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
