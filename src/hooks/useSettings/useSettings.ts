import { useEffect, useMemo, useState } from "react";

import { themes } from "@/themes/themes";

import type { Theme, UseSettingsState } from "./useSettings.types";

export const useSettings = () => {
  const [state, setState] = useState<UseSettingsState>({
    language: "en",
    theme: "dark",
    currentThemeSource: "system",
  });

  const setTheme = (currentThemeSource: Theme): void =>
    setState((prevState) => {
      if (currentThemeSource === "system") {
        const theme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

        return {
          ...prevState,
          currentThemeSource,
          theme,
        };
      }

      return {
        ...prevState,
        currentThemeSource,
        theme: currentThemeSource,
      };
    });

  const matchSystemTheme = ({ matches }: MediaQueryListEvent | MediaQueryList): void =>
    setState((prevState) => ({ ...prevState, theme: matches ? "dark" : "light" }));

  useEffect(() => {
    if (state.currentThemeSource !== "system") {
      return;
    }

    const matchMedia: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    matchMedia.addEventListener("change", matchSystemTheme);
    return (): void => matchMedia.removeEventListener("change", matchSystemTheme);
  }, [state.currentThemeSource]);

  const theme = useMemo(() => themes[state.theme], [state.theme]);

  return {
    setTheme,
    theme,
    currentThemeSource: state.currentThemeSource,
  } as const;
};
