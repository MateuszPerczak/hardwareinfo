import type { ComboBoxOption } from "@/components/comboBox/ComboBox.types";
import type { Theme } from "@/hooks/useSettings/useSettings.types";

export const themes: ComboBoxOption<Theme>[] = [
  {
    name: "Dark",
    value: "dark",
  },
  {
    name: "Light",
    value: "light",
  },
  {
    name: "System",
    value: "system",
  },
];
