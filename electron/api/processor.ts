import { cpu, type Systeminformation } from "systeminformation";

export const getCpuInformation = async (): Promise<Systeminformation.CpuData> =>
  await cpu();
