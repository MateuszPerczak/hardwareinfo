import type { Theme } from "@emotion/react";

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

export const themes: Themes = {
  light: {
    textPrimary: "#1a1a1a",
    textSecondary: "#5f5f5f",
    textDisabled: "#9f9f9f",
    fill: "#EDEDED",
    fillHover: "#EAEAEA",
    fillActive: "#EAEAEA",
    fillDisabled: "#F9F9F9",
    fillStrong: "#8A8A8A",
    stroke: "#EAEAEA",
    strokeHover: "#D1D1D1",
    strokeActive: "#EAEAEA",
    strokeDisabled: "#EAEAEA",
    strokeStrong: "#EAEAEA",
    background: "#F9F9F9",
    backgroundHover: "#F7F7F7",
    backgroundActive: "#F7F7F7",
    backgroundLayer: "#FFFFFF",
    backgroundSecondary: "#F7F7F7",
    backgroundStrong: "#EEEEEE",
    smoke: "#AEAEAE",
  },
  dark: {
    textPrimary: "#fff",
    textSecondary: "#cecece",
    textDisabled: "#767676",
    fill: "#353535",
    fillHover: "#3A3A3A",
    fillActive: "#2F2F2F",
    fillDisabled: "#313131",
    fillStrong: "#9D9D9D",
    stroke: "#373737",
    strokeHover: "#3C3C3C",
    strokeActive: "#373737",
    strokeDisabled: "#373737",
    strokeStrong: "#242424",
    background: "#282828",
    backgroundLayer: "#2C2C2C",
    backgroundHover: "#333333",
    backgroundActive: "#282828",
    backgroundSecondary: "#202020",
    backgroundStrong: "#1C1C1C",
    smoke: "#1C1C1C",
  },
};
