import type { Systeminformation } from "systeminformation";

import { type DataTemplate, DataType } from "@/components/dataPanel/DataPanel.types";

export const controllerInformationTemplate: DataTemplate<Systeminformation.GraphicsControllerData>[] =
  [
    {
      key: "model",
      label: "Model",
      type: DataType.String,
    },
    {
      key: "vendor",
      label: "Vendor",
      type: DataType.String,
    },
    {
      key: "vram",
      label: "VRAM",
      type: DataType.Megabytes,
    },
    {
      key: "vramDynamic",
      label: "VRAM dynamic",
      type: DataType.Boolean,
    },
    {
      key: "bus",
      label: "Bus",
      type: DataType.String,
    },
    {
      key: "subDeviceId",
      label: "Sub device ID",
      type: DataType.String,
    },
  ];

export const displayInformationTemplate: DataTemplate<Systeminformation.GraphicsDisplayData>[] =
  [
    {
      key: "vendor",
      label: "Vendor",
      type: DataType.String,
    },
    {
      key: "model",
      label: "Model",
      type: DataType.String,
    },
    {
      key: "resolutionX",
      label: "Resolution X",
      type: DataType.String,
    },
    {
      key: "resolutionY",
      label: "Resolution Y",
      type: DataType.String,
    },
    {
      key: "connection",
      label: "Connection",
      type: DataType.String,
    },
    {
      key: "currentRefreshRate",
      label: "Current refresh rate",
      type: DataType.String,
    },
    {
      key: "deviceName",
      label: "Device name",
      type: DataType.String,
    },
    {
      key: "pixelDepth",
      label: "Pixel depth",
      type: DataType.String,
    },
    {
      key: "vendorId",
      label: "Vendor ID",
      type: DataType.String,
    },
  ];
