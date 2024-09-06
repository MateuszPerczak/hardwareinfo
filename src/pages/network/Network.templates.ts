import type { Systeminformation } from "systeminformation";

import { type DataTemplate, DataType } from "@/components/dataPanel/DataPanel.types";

export const networkInformationTemplate: DataTemplate<Systeminformation.CpuData>[] = [
  {
    key: "manufacturer",
    label: "Manufacturer",
    type: DataType.String,
  },
];
