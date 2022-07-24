import { useMemo } from "react";
import useLocalStorage from "use-local-storage";
import useSystemTheme from "react-use-system-theme";
import themes from "../Themes/themes.json";

export enum Themes {
  System = "system",
  Light = "light",
  Dark = "dark",
}

const useTheme = () => {
  const [browserTheme, setBrowserTheme] = useLocalStorage<Themes>(
    "theme",
    Themes.System
  );

  const systemTheme = useSystemTheme();

  const lookupThemes = useMemo(() => {
    return {
      system: systemTheme === "dark" ? themes.dark : themes.light,
      light: themes.light,
      dark: themes.dark,
    };
  }, [systemTheme]);

  const themeObject = useMemo(() => {
    return lookupThemes[browserTheme] ?? lookupThemes.system;
  }, [lookupThemes, browserTheme]);

  return {
    themeObject,
    browserTheme,
    setBrowserTheme,
  };
};

export default useTheme;
