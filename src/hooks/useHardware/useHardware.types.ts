import type { Systeminformation } from "systeminformation";

export type HardwareState = {
  status: Record<HardwareId, HardwareStatus>;
  hardware: Partial<Hardware>;
};

export type HardwareStatus = {
  isLoading: boolean;
  error: boolean;
  isPreLoaded: boolean;
};

export type Hardware = {
  processor: Systeminformation.CpuData;
  memory: Systeminformation.MemData;
  memoryLayout: Systeminformation.MemLayoutData[];
  graphics: Systeminformation.GraphicsData;
  motherboard: Systeminformation.BaseboardData;
  bios: Systeminformation.BiosData;
  network:
    | Systeminformation.NetworkInterfacesData[]
    | Systeminformation.NetworkInterfacesData;
  usb: Systeminformation.UsbData[];
  storage: Systeminformation.DiskLayoutData[];
};

export type HardwareId = keyof Hardware;

export type HardwareProperties = {
  id: keyof Hardware;
  getHardware: () => Promise<Hardware[HardwareProperties["id"]]>;
};
