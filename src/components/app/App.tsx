import { ThemeProvider } from "@emotion/react";
import { domAnimation, LazyMotion } from "framer-motion";
import { useEffect } from "react";

import { AppContent } from "@/components/index";
import { HardwareContext } from "@/contexts";
import { useHardware, useTheme } from "@/hooks/index";

export const App = (): JSX.Element => {
  const theme = useTheme();
  const hardware = useHardware();

  useEffect(() => {
    hardware.preloadHardware();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LazyMotion features={domAnimation} strict>
        <HardwareContext.Provider value={hardware}>
          <AppContent />
        </HardwareContext.Provider>
      </LazyMotion>
    </ThemeProvider>
  );
};
