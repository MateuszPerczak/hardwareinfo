import { useState, useMemo } from "react";
import type NavProps from "./Nav.types";
import type { FC } from "react";
import StyledNavigation from "./Nav.style";
import NavHamburger from "../NavHamburger/NavHamburger";
import NavButton from "../NavButton/NavButton";
import NavSpacer from "../NavSpacer/NavSpacer";
import { routes } from "../../Routes/routes";

const Nav: FC<NavProps> = ({ setPage }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const topItems = useMemo(() => {
    return routes.filter((route) => route.position === "top");
  }, []);

  const bottomItems = useMemo(() => {
    return routes.filter((route) => route.position === "bottom");
  }, []);

  return (
    <StyledNavigation
      initial={{ width: "0px" }}
      animate={{ width: isOpen ? "200px" : "49px" }}
      transition={{ type: "spring", mass: 0.5, stiffness: 300, damping: 30 }}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {topItems.map(({ header, ...route }, index) => {
        return (
          <NavButton
            key={index}
            header={header}
            {...route}
            onClick={() => setPage(header)}
          />
        );
      })}
      <NavSpacer />
      {bottomItems.map(({ header, ...route }, index) => {
        return (
          <NavButton
            key={index}
            header={header}
            {...route}
            onClick={() => setPage(header)}
          />
        );
      })}
    </StyledNavigation>
  );
};

export default Nav;
