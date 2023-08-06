import type { Systeminformation } from "systeminformation";

import { type DataTemplate, DataType } from "@/components/dataPanel/DataPanel.types";

export const biosInformationTemplate: DataTemplate<Systeminformation.BiosData>[] = [
  {
    key: "vendor",
    label: "Vendor",
    type: DataType.String,
  },
  {
    key: "version",
    label: "Version",
    type: DataType.String,
  },
  {
    key: "releaseDate",
    label: "Release date",
    type: DataType.String,
  },
];

export const motherboardInformationTemplate: DataTemplate<Systeminformation.BaseboardData>[] =
  [
    {
      key: "manufacturer",
      label: "Manufacturer",
      type: DataType.String,
    },
    {
      key: "model",
      label: "Model",
      type: DataType.String,
    },
    {
      key: "serial",
      label: "Serial number",
      type: DataType.String,
    },
    {
      key: "memSlots",
      label: "Memory slots",
      type: DataType.String,
    },
    {
      key: "memMax",
      label: "Max memory",
      type: DataType.Bytes,
    },
  ];
