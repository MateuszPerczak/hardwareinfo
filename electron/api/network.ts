import {networkInterfaces, networkStats, type Systeminformation } from "systeminformation";

export const getNetworkInformation = async (): Promise<Systeminformation.NetworkInterfacesData[] | Systeminformation.NetworkInterfacesData> =>
  await networkInterfaces();

export const getNetworkStatsInformation = async (): Promise<Systeminformation.NetworkStatsData[]> =>
  await networkStats();
