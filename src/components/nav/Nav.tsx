import type { Pages } from "@/pages/pages";

import { Icons } from "../icon/Icon.types";
import { NavButton, NavSpacer } from "./components";
import { StyledNav } from "./Nav.styles";
import type { NavProps } from "./Nav.types";

const Nav = ({ navigateTo, page }: NavProps<Pages>): JSX.Element => {
  return (
    <StyledNav>
      <NavButton
        icon={Icons.Home}
        label="Home"
        onClick={(): void => navigateTo("home")}
        selected={page === "home"}
      />
      <NavButton
        icon={Icons.Processor}
        label="Processor"
        onClick={(): void => navigateTo("processor")}
        selected={page === "processor"}
      />
      <NavButton
        icon={Icons.Memory}
        label="Memory"
        onClick={(): void => navigateTo("memory")}
        selected={page === "memory"}
      />
      <NavButton
        icon={Icons.Graphics}
        label="Graphics"
        onClick={(): void => navigateTo("graphics")}
        selected={page === "graphics"}
      />
      <NavSpacer />
      <NavButton
        icon={Icons.Settings}
        label="Settings"
        onClick={(): void => navigateTo("settings")}
        selected={page === "settings"}
      />
    </StyledNav>
  );
};

export default Nav;
