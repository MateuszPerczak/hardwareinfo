import { ThemeProvider } from "@emotion/react";

import { AppContent } from "@/components/index";
import { useHardware, useTheme } from "@/hooks/index";
import { HardwareContext } from "@/contexts";
import { useEffect } from "react";

export const App = (): JSX.Element => {
  const theme = useTheme();
  const hardware = useHardware();

  useEffect(() => {
    hardware.getHardware();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <HardwareContext.Provider value={hardware}>
        <AppContent />
      </HardwareContext.Provider>
    </ThemeProvider>
  );
};
