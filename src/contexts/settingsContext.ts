import { createContext } from "react";

import type { useSettings } from "@/hooks";
import { themes } from "@/themes/themes";

export const SettingsContext = createContext<ReturnType<typeof useSettings>>({
  setTheme: () => undefined,
  theme: themes["light"],
});
