import { mem, memLayout, type Systeminformation } from "systeminformation";

export const getMemoryLayout = async (): Promise<Systeminformation.MemLayoutData[]> =>
  memLayout();

export const getMemoryInformation = async (): Promise<Systeminformation.MemData> => mem();
