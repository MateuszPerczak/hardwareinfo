import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";

import useTheme from "@/hooks/useTheme/useTheme";
import { router } from "@/routes/routes";

import GlobalStyle from "../globalStyle/GlobalStyle";

const App = (): JSX.Element => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
