import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    scrollbar: string;
    navigation: string;
    border: string;
    hamburger: string;
    panel: string;
    shadow: string;
    button: string;
    hover: string;
  }
}
