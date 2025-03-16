// import type { Theme } from "@emotion/react";
// import { useEffect, useState } from "react";

// import { ColorThemes, themes } from "../../themes/themes";
// import type { UpdateThemeProps, UseThemeState } from "./useTheme.types";

// export const useTheme = () => {
//   const [state, setState] = useState<UseThemeState>({
//     theme: "system",
//   });

//   const [theme, setTheme] = useState<ColorThemes>(ColorThemes.Dark);

//   const updateTheme = ({ matches }: UpdateThemeProps): void => {
//     setTheme(matches ? ColorThemes.Dark : ColorThemes.Light);
//   };

//   useEffect(() => {
//     const matchMedia: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

//     updateTheme(matchMedia);

//     matchMedia.addEventListener("change", updateTheme);
//     return () => matchMedia.removeEventListener("change", updateTheme);
//   }, []);

//   return [];
// };
