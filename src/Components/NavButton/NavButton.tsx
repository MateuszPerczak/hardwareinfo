import type { FC } from "react";
import type NavButtonProps from "./NavButton.types";
import { StyledNavButton } from "./NavButton.style";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";

const NavButton: FC<NavButtonProps> = ({
  icon,
  header,
  ...rest
}: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton {...rest}>
      <Icon>{icon}</Icon>
      <Text>{header}</Text>
    </StyledNavButton>
  );
};

export default NavButton;
