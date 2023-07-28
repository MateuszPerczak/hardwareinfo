import type { Systeminformation } from "systeminformation";

import { type DataTemplate, DataType } from "@/components/dataPanel/DataPanel.types";

export const processorInformationTemplate: DataTemplate<Systeminformation.CpuData>[] = [
  {
    key: "manufacturer",
    label: "Manufacturer",
    type: DataType.String,
  },
  {
    key: "brand",
    label: "Brand",
    type: DataType.String,
  },
  {
    key: "vendor",
    label: "Vendor",
    type: DataType.String,
  },
  {
    key: "family",
    label: "Family",
    type: DataType.String,
  },
  {
    key: "model",
    label: "Model",
    type: DataType.String,
  },
  {
    key: "stepping",
    label: "Stepping",
    type: DataType.String,
  },
  {
    key: "revision",
    label: "Revision",
    type: DataType.String,
  },
  {
    key: "voltage",
    label: "Voltage",
    type: DataType.Volt,
  },
  {
    key: "speed",
    label: "Speed",
    type: DataType.Gigahertz,
  },
  {
    key: "speedMin",
    label: "Speed min",
    type: DataType.Gigahertz,
  },
];
