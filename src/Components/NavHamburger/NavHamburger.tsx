import { FC } from "react";
import StyledNavHamburger from "./NavHamburger.style";
import Icon from "../Icon/Icon";

type NavHamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
};

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
