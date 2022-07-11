import { FC, useState } from "react";
import { useTransition, useSpring } from "react-spring";
import StyledNavigation from "./Nav.style";
import NavHamburger from "../NavHamburger/NavHamburger";
import NavButton from "../NavButton/NavButton";
import NavSpacer from "../NavSpacer/NavSpacer";

const Nav: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const animatedNavigation = useSpring({
    width: isOpen ? "200px" : "49px",
    config: {
      mass: 0.5,
      tension: 300,
    },
  });

  return (
    <StyledNavigation style={animatedNavigation}>
      <NavHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <NavButton icon="&#xE10F;" header="Home" />
      <NavButton icon="&#xEEA1;" header="Processor" />
      <NavButton icon="&#xE964;" header="Motherboard" />
      <NavButton icon="&#xEEA0;" header="Memory" />
      <NavButton icon="&#xF211;" header="Gpu" />
      <NavButton icon="&#xE839;" header="Ethernet" />
      <NavButton icon="&#xEDA2;" header="Disks" />
      <NavSpacer />
      <NavButton icon="&#xE115;" header="Settings" />
    </StyledNavigation>
  );
};

export default Nav;
