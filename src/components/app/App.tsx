import { ThemeProvider } from "@emotion/react";
import { domAnimation, LazyMotion } from "framer-motion";
import { useEffect } from "react";

import { AppContent } from "@/components/index";
import { HardwareContext, SettingsContext } from "@/contexts";
import { useHardware, useSettings } from "@/hooks/index";

export const App = (): JSX.Element => {
  const settings = useSettings();
  const hardware = useHardware();

  useEffect(() => {
    hardware.preloadHardware();
  }, []);

  return (
    <ThemeProvider theme={settings.theme}>
      <LazyMotion features={domAnimation} strict>
        <HardwareContext.Provider value={hardware}>
          <SettingsContext.Provider value={settings}>
            <AppContent />
          </SettingsContext.Provider>
        </HardwareContext.Provider>
      </LazyMotion>
    </ThemeProvider>
  );
};
