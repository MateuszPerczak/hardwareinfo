import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import useTheme from "@/hooks/useTheme/useTheme";
import { router } from "@/routes/routes";

import GlobalStyle from "../globalStyle/GlobalStyle";

const App = (): JSX.Element => {
  const theme = useTheme();
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
