import { memo } from "react";

import { Icons } from "../icon/Icon.types";
import NavLink from "./components/navLink/NavLink";
import StyledNav from "./Nav.styles";

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <NavLink icon={Icons.Home} label="Home" to="home" />
      <NavLink icon={Icons.Processor} label="Processor" to="cpu" />
      <NavLink icon={Icons.Motherboard} label="Motherboard" to="mbr" />
      <NavLink icon={Icons.Memory} label="Memory" to="memory" />
      <NavLink icon={Icons.Graphics} label="Graphics" to="gpu" />
      <NavLink icon={Icons.Network} label="Network" to="network" />
      <NavLink icon={Icons.Storage} label="Storage" to="storage" />
      <div className="nav-separator"></div>
      <NavLink icon={Icons.Settings} label="Settings" to="settings" />
    </StyledNav>
  );
};

export default memo(Nav);
