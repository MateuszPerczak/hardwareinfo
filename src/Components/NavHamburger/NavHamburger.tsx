import type { FC } from "react";
import type NavHamburgerProps from "./NavHamburger.types";
import StyledNavHamburger from "./NavHamburger.style";
import Icon from "../Icon/Icon";

const NavHamburger: FC<NavHamburgerProps> = ({
  isOpen,
  onClick,
}: NavHamburgerProps): JSX.Element => {
  return (
    <StyledNavHamburger onClick={onClick}>
      <Icon>{isOpen ? "\uE76B" : "\uE76C"}</Icon>
    </StyledNavHamburger>
  );
};

export default NavHamburger;
