import { ThemeProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import useTheme from "../../Hooks/useTheme";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const { themeObject, browserTheme } = useTheme();

  return <ThemeProvider theme={themeObject}>{children}</ThemeProvider>;
};

export default AppProvider;
