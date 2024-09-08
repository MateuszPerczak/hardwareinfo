import type { DetailedHTMLProps, HTMLAttributes } from "react";

export type DataPanelProps<P> = {
  template: DataTemplate<P>[];
  data: { [key in keyof P]?: unknown };
  fallbackValue?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export enum DataType {
  String = "string",
  Bytes = "bytes",
  Megabytes = "megabytes",
  Volt = "volt",
  Megahertz = "megahertz",
  Gigahertz = "gigahertz",
  Boolean = "boolean",
  MegabytesPerSecond = "megabytesPerSecond",
}

export type DataTemplate<P> = {
  key: keyof P;
  label: string;
  type: DataType;
};
