import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";
import { Themes } from "../Hooks/useTheme";

type ThemeContextProps = {
  browserTheme: Themes;
  setBrowserTheme: Dispatch<SetStateAction<Themes>>;
};

const ThemeContext = createContext({
  browserTheme: Themes.System,
} as unknown as ThemeContextProps);

export default ThemeContext;
