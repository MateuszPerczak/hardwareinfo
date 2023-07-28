import type { CSSProperties } from "react";

export type DataPanelProps<P> = {
  template: DataTemplate<P>[];
  data: { [key in keyof P]?: unknown };
  fallbackValue?: string;
  padding?: CSSProperties["padding"];
};

export enum DataType {
  String = "string",
  Bytes = "bytes",
  Volt = "volt",
  Megahertz = "megahertz",
  Gigahertz = "gigahertz",
}

export type DataTemplate<P> = {
  key: keyof P;
  label: string;
  type: DataType;
};
