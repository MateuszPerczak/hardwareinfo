import type { CSSProperties } from "react";

export type StackPanelProps = {
  flexDirection?: CSSProperties["flexDirection"];
  flex?: CSSProperties["flex"];
  flexWrap?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  padding?: CSSProperties["padding"];
};
