import { cpu, type Systeminformation } from "systeminformation";

export const getProcessorInformation = async (): Promise<Systeminformation.CpuData> =>
  await cpu();
