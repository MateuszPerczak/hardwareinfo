import { contextBridge, ipcRenderer } from "electron";
import type { Systeminformation } from "systeminformation";

contextBridge.exposeInMainWorld("api", {
  showDevTools: (): void => ipcRenderer.send("show-dev-tools"),
  getMemoryLayout: async (): Promise<Systeminformation.MemLayoutData[]> =>
    ipcRenderer.invoke("getMemoryLayout"),
  getMemoryInformation: async (): Promise<Systeminformation.MemData> =>
    ipcRenderer.invoke("getMemoryInformation"),
  getProcessorInformation: async (): Promise<Systeminformation.CpuData> =>
    ipcRenderer.invoke("getProcessorInformation"),
  getStorageInformation: async (): Promise<Systeminformation.BlockDevicesData[]> =>
    ipcRenderer.invoke("getStorageInformation"),
  getGraphicsInformation: async (): Promise<Systeminformation.GraphicsData> =>
    ipcRenderer.invoke("getGraphicsInformation"),
  getBiosInformation: async (): Promise<Systeminformation.BiosData> =>
    ipcRenderer.invoke("getBiosInformation"),
  getMotherboardInformation: async (): Promise<Systeminformation.BaseboardData> =>
    ipcRenderer.invoke("getMotherboardInformation"),
  getChassisInformation: async (): Promise<Systeminformation.ChassisData> =>
    ipcRenderer.invoke("getChassisInformation"),
  getNetworkInformation: async (): Promise<Systeminformation.NetworkInterfacesData[] | Systeminformation.NetworkInterfacesData> =>
    ipcRenderer.invoke("getNetworkInformation"),
  getNetworkStatsInformation: async (): Promise<Systeminformation.NetworkStatsData[]> =>
  ipcRenderer.invoke("getNetworkStatsInformation"),
});
