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
});
