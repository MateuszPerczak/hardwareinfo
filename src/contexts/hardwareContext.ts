import { createContext } from "react";

import type { useHardware } from "@/hooks";

export const HardwareContext = createContext<ReturnType<typeof useHardware>>({
  getHardware: async () => undefined,
  isLoading: false,
  getHardwareStatus: () => ({ error: false, isLoading: false, isPreLoaded: false }),
  getSpecificHardware: async () => undefined,
  hardware: {},
  preloadHardware: async () => undefined,
});
