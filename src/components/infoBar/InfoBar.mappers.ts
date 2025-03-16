import type { Theme } from "@emotion/react";

import { Icons } from "../icon/Icon.types";
import type { InfoBarType } from "./InfoBar.types";

export const typeToIconMapper: Record<InfoBarType, Icons> = {
  error: Icons.ErrorFilled,
  info: Icons.InfoFilled,
  waring: Icons.InfoFilled,
};

export const typeToColorMapper: Record<InfoBarType, keyof Theme> = {
  error: "infoBarErrorColor",
  info: "infoBarInfoColor",
  waring: "infoBarWarningColor",
};
export const typeToBackgroundMapper: Record<InfoBarType, keyof Theme> = {
  error: "infoBarErrorBackground",
  info: "infoBarInfoBackground",
  waring: "infoBarWarningBackground",
};
