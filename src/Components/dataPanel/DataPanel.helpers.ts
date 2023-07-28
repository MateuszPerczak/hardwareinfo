import type { DataType } from "./DataPanel.types";

const convertBytes = (bytes: number): string => {
  const units = ["", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let unitIndex = 0;
  while (bytes >= 1024) {
    bytes /= 1024;
    unitIndex++;
  }
  return `${bytes.toFixed(2)} ${units[unitIndex]}`;
};

export const dataTypeToFormat: Record<DataType, (value: unknown) => string> = {
  string: (value) => `${value}`,
  megahertz: (value) => `${value} MHz`,
  gigahertz: (value) => `${value} GHz`,
  volt: (value) => `${value} V`,
  bytes: (value) => `${convertBytes(value as number)}`,
};
