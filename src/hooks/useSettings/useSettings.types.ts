import type { ColorThemes } from "@/themes/themes";

export type Theme = "dark" | "light" | "system";

export type Language = "pl" | "en";

export type UseSettingsState = {
  currentThemeSource: Theme;
  theme: ColorThemes;
  language: Language;
};
