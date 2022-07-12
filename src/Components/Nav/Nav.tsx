import { FC, useState, useMemo } from "react";
import { useSpring } from "react-spring";
import StyledNavigation from "./Nav.style";
import NavHamburger from "../NavHamburger/NavHamburger";
import NavButton from "../NavButton/NavButton";
import NavSpacer from "../NavSpacer/NavSpacer";
import { routes } from "../../Routes/routes";

const Nav: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const animatedNavigation = useSpring({
    width: isOpen ? "200px" : "49px",
    config: {
      mass: 0.5,
      tension: 300,
    },
  });

  const topItems = useMemo(() => {
    return routes.filter((route) => route.position === "top");
  }, []);

  const bottomItems = useMemo(() => {
    return routes.filter((route) => route.position === "bottom");
  }, []);

  return (
    <StyledNavigation
      style={animatedNavigation}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {topItems.map(({ id, page, ...route }) => {
        return <NavButton key={id} {...route} />;
      })}
      <NavSpacer />
      {bottomItems.map(({ id, page, ...route }) => {
        return <NavButton key={id} {...route} />;
      })}
    </StyledNavigation>
  );
};

export default Nav;
