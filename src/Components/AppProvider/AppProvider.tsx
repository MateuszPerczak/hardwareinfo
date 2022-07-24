import { ThemeProvider } from "@emotion/react";
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import type { Themes } from "../../Hooks/useTheme";
import useTheme from "../../Hooks/useTheme";
import ThemeContext from "../../Contexts/ThemeContext";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const { themeObject, browserTheme, setBrowserTheme } = useTheme();

  return (
    <ThemeProvider theme={themeObject}>
      <ThemeContext.Provider
        value={{
          browserTheme,
          setBrowserTheme: setBrowserTheme as Dispatch<SetStateAction<Themes>>,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
