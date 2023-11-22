import { ThemeProvider } from "@emotion/react";

import useTheme from "@/hooks/useTheme/useTheme";

import AppContent from "../appContent/AppContent";

const App = (): JSX.Element => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
