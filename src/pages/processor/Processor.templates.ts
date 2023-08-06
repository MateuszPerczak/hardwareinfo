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
    key: "physicalCores",
    label: "Cores",
    type: DataType.String,
  },
  {
    key: "cores",
    label: "Threads",
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
    key: "socket",
    label: "Socket",
    type: DataType.String,
  },
  {
    key: "stepping",
    label: "Stepping",
    type: DataType.String,
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
  {
    key: "virtualization",
    label: "Virtualization",
    type: DataType.String,
  },
];

export const cacheInformationTemplate: DataTemplate<Systeminformation.CpuCacheData>[] = [
  {
    key: "l1d",
    label: "Cache L1d",
    type: DataType.Bytes,
  },
  {
    key: "l1i",
    label: "Cache L1i",
    type: DataType.Bytes,
  },
  {
    key: "l2",
    label: "Cache L2",
    type: DataType.Bytes,
  },
  {
    key: "l3",
    label: "Cache L3",
    type: DataType.Bytes,
  },
];
