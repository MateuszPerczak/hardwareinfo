import { mem, memLayout, type Systeminformation } from "systeminformation";

export const getMemoryLayout = async (): Promise<Systeminformation.MemLayoutData[]> =>
  await memLayout();

export const getMemoryInformation = async (): Promise<Systeminformation.MemData> =>
  await mem();
