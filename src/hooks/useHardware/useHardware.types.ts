import type { Systeminformation } from "systeminformation";

export type HardwareState = {
  status: Record<HardwareId, Status>;
  hardware: Hardware;
};

export type Status = "loading" | "done";

export type HardwareProperty<I extends HardwareId, D> = {
  id: I;
  getHardware: () => Promise<D>;
};

export type Hardware = Partial<{
  processor: Systeminformation.CpuData;
  memory: Systeminformation.MemData;
  memoryLayout: Systeminformation.MemLayoutData[];
  graphics: Systeminformation.GraphicsData;
  motherboard: Systeminformation.BaseboardData;
  bios: Systeminformation.BiosData;
  network:
    | Systeminformation.NetworkInterfacesData[]
    | Systeminformation.NetworkInterfacesData;
  networkStats: Systeminformation.NetworkStatsData[];
  usb: Systeminformation.UsbData[];
}>;

export type HardwareId = keyof Hardware;

type ProcessorProperties = HardwareProperty<"processor", Systeminformation.CpuData>;
type MemoryProperties = HardwareProperty<"memory", Systeminformation.MemData>;
type MemoryLayoutProperties = HardwareProperty<
  "memoryLayout",
  Systeminformation.MemLayoutData[]
>;
type GraphicsProperties = HardwareProperty<"graphics", Systeminformation.GraphicsData>;
type MotherboardProperties = HardwareProperty<
  "motherboard",
  Systeminformation.BaseboardData
>;
type BiosProperties = HardwareProperty<"bios", Systeminformation.BiosData>;

type NetworkInformationProperties = HardwareProperty<
  "network",
  Systeminformation.NetworkInterfacesData[] | Systeminformation.NetworkInterfacesData
>;
type NetworkStatsProperties = HardwareProperty<
  "networkStats",
  Systeminformation.NetworkStatsData[]
>;
export type USBProperties = HardwareProperty<"usb", Systeminformation.UsbData[]>;

export type HardwareProperties =
  | ProcessorProperties
  | MemoryProperties
  | MemoryLayoutProperties
  | GraphicsProperties
  | MotherboardProperties
  | BiosProperties
  | NetworkInformationProperties
  | NetworkStatsProperties
  | USBProperties;
