import { contextBridge, ipcRenderer } from "electron";
import type { Systeminformation } from "systeminformation";

contextBridge.exposeInMainWorld("api", {
  showDevTools: (): void => ipcRenderer.send("show-dev-tools"),
  getMemoryLayout: async (): Promise<Systeminformation.MemLayoutData[]> =>
    ipcRenderer.invoke("getMemoryLayout"),
  getMemoryInformation: async (): Promise<Systeminformation.MemData> =>
    ipcRenderer.invoke("getMemoryInformation"),
});
