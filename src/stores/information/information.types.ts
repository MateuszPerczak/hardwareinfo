import type { Systeminformation } from "systeminformation";

export type InformationState = {
  processor: Systeminformation.CpuData | null;
  updateProcessor: () => Promise<void>;
  memory: Systeminformation.MemData | null;
  updateMemory: () => Promise<void>;
  memoryModules: Systeminformation.MemLayoutData[] | null;
  updateMemoryModules: () => Promise<void>;
};
