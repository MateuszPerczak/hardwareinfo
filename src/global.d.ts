import type { Systeminformation } from "systeminformation";

declare global {
  interface Window {
    api: {
      showDevTools: () => void;
      getMemoryLayout: () => Promise<Systeminformation.MemLayoutData[]>;
      getMemoryInformation: () => Promise<Systeminformation.MemData>;
      getProcessorInformation: () => Promise<Systeminformation.CpuData>;
      getStorageInformation: () => Promise<Systeminformation.BlockDevicesData[]>;
      getGraphicsInformation: () => Promise<Systeminformation.GraphicsData>;
      getBiosInformation: () => Promise<Systeminformation.BiosData>;
      getMotherboardInformation: () => Promise<Systeminformation.BaseboardData>;
    };
  }
}
