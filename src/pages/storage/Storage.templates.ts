import type { Systeminformation } from "systeminformation";

import { type DataTemplate, DataType } from "@/components/dataPanel/DataPanel.types";

export const storageInformationTemplate: DataTemplate<Systeminformation.DiskLayoutData>[] =
  [
    {
      key: "name",
      label: "Name",
      type: DataType.String,
    },
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
      key: "smartStatus",
      label: "Smart status",
      type: DataType.String,
    },
    {
      key: "serialNum",
      label: "Serial num",
      type: DataType.String,
    },
    {
      key: "firmwareRevision",
      label: "Firmware revision",
      type: DataType.String,
    },
    {
      key: "interfaceType",
      label: "Interface type",
      type: DataType.String,
    },
    {
      key: "temperature",
      label: "Temperature",
      type: DataType.String,
    },
  ];

export const additionalStorageInformationTemplate: DataTemplate<Systeminformation.DiskLayoutData>[] =
  [
    {
      key: "device",
      label: "Device",
      type: DataType.String,
    },
    {
      key: "bytesPerSector",
      label: "Bytes per sector",
      type: DataType.String,
    },
  ];

export const hddStorageInformationTemplate: DataTemplate<Systeminformation.DiskLayoutData>[] =
  [
    {
      key: "totalCylinders",
      label: "Total cylinders",
      type: DataType.String,
    },
    {
      key: "totalHeads",
      label: "Total heads",
      type: DataType.String,
    },
    {
      key: "totalSectors",
      label: "Total sectors",
      type: DataType.String,
    },
    {
      key: "totalTracks",
      label: "Total tracks",
      type: DataType.String,
    },
    {
      key: "tracksPerCylinder",
      label: "Tracks per cylinder",
      type: DataType.String,
    },
  ];
