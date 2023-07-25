import type { Systeminformation } from "systeminformation";

declare global {
  interface Window {
    api: {
      showDevTools: () => void;
      getMemoryLayout: () => Promise<Systeminformation.MemLayoutData[]>;
      getMemoryInformation: () => Promise<Systeminformation.MemData>;
      getCpuInformation: () => Promise<Systeminformation.CpuData>;
    };
  }
}

export {};
