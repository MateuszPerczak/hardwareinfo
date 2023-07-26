import { blockDevices, type Systeminformation } from "systeminformation";

export const getStorageInformation = async (): Promise<
  Systeminformation.BlockDevicesData[]
> => await blockDevices();
