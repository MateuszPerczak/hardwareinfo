import "@emotion/react";

type Hex = `#${string}`;

declare module "@emotion/react" {
  export interface Theme {
    textPrimary: Hex;
    textSecondary: Hex;
    textDisabled: Hex;
    fill: Hex;
    fillHover: Hex;
    fillActive: Hex;
    fillDisabled: Hex;
    fillStrong: Hex;
    stroke: Hex;
    strokeHover: Hex;
    strokeActive: Hex;
    strokeDisabled: Hex;
    strokeStrong: Hex;
    background: Hex;
    backgroundHover: Hex;
    backgroundActive: Hex;
    backgroundLayer: Hex;
    backgroundSecondary: Hex;
    backgroundStrong: Hex;
    smoke: Hex;
    fillColorError: Hex;
    fillColorErrorBackground: Hex;
    fillColorWarning: Hex;
    fillColorWarningBackground: Hex;
    fillColorInfo: Hex;
    fillColorInfoBackground: Hex;
  }
}
