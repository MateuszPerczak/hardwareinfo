import type { Systeminformation } from "systeminformation";

import { type DataTemplate, DataType } from "@/components/dataPanel/DataPanel.types";

export const memoryInformationTemplate: DataTemplate<Systeminformation.MemData>[] = [
  {
    key: "total",
    label: "Total size",
    type: DataType.Bytes,
  },
  {
    key: "swaptotal",
    label: "Swap size",
    type: DataType.Bytes,
  },
];

export const memoryLayoutTemplate: DataTemplate<Systeminformation.MemLayoutData>[] = [
  {
    key: "type",
    label: "Type",
    type: DataType.String,
  },
  {
    key: "size",
    label: "Size",
    type: DataType.Bytes,
  },
  {
    key: "clockSpeed",
    label: "Clock speed",
    type: DataType.Megahertz,
  },
  {
    key: "bank",
    label: "Bank",
    type: DataType.String,
  },
  {
    key: "formFactor",
    label: "Form factor",
    type: DataType.String,
  },
  {
    key: "serialNum",
    label: "Serial number",
    type: DataType.String,
  },
  {
    key: "partNum",
    label: "Part number",
    type: DataType.String,
  },
  {
    key: "voltageConfigured",
    label: "Voltage configured",
    type: DataType.Volt,
  },
  {
    key: "ecc",
    label: "Supports ECC",
    type: DataType.String,
  },
];
