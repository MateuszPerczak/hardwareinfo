import type { Systeminformation } from "systeminformation";

import { type DataTemplate, DataType } from "@/components/dataPanel/DataPanel.types";

export const networkInformationTemplate: DataTemplate<Systeminformation.NetworkInterfacesData>[] =
  [
    {
      key: "ifaceName",
      label: "Name",
      type: DataType.String,
    },
    {
      key: "default",
      label: "Default",
      type: DataType.Boolean,
    },
    {
      key: "dhcp",
      label: "DHCP",
      type: DataType.Boolean,
    },
    {
      key: "dnsSuffix",
      label: "DNS suffix",
      type: DataType.String,
    },
    {
      key: "duplex",
      label: "Duplex",
      type: DataType.String,
    },
    {
      key: "ieee8021xAuth",
      label: "IEEE 802.1X Auth",
      type: DataType.String,
    },
    {
      key: "ieee8021xState",
      label: "IEEE 802.1X State",
      type: DataType.String,
    },
    {
      key: "duplex",
      label: "Duplex",
      type: DataType.String,
    },
    {
      key: "internal",
      label: "Internal",
      type: DataType.Boolean,
    },
    {
      key: "mac",
      label: "Mac address",
      type: DataType.String,
    },
    {
      key: "operstate",
      label: "State",
      type: DataType.String,
    },
    {
      key: "speed",
      label: "Speed",
      type: DataType.MegabytesPerSecond,
    },
    {
      key: "type",
      label: "Type",
      type: DataType.String,
    },
    {
      key: "virtual",
      label: "Virtual",
      type: DataType.Boolean,
    },
  ];

export const ipv4InformationTemplate: DataTemplate<Systeminformation.NetworkInterfacesData>[] =
  [
    {
      key: "ip4",
      label: "Address ipv4",
      type: DataType.String,
    },
    {
      key: "ip4subnet",
      label: "Mask ipv4",
      type: DataType.String,
    },
  ];

export const ip6InformationTemplate: DataTemplate<Systeminformation.NetworkInterfacesData>[] =
  [
    {
      key: "ip6",
      label: "Address ip6",
      type: DataType.String,
    },
    {
      key: "ip6subnet",
      label: "Mask ip6",
      type: DataType.String,
    },
  ];
