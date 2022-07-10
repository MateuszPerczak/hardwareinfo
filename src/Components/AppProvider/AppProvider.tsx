import { ThemeProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
};

export default AppProvider;
