import { ThemeProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import themes from "../../Themes/themes.json";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <ThemeProvider theme={themes["dark"]}>{children}</ThemeProvider>;
};

export default AppProvider;
