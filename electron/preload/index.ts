import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  showDevTools: (): void => ipcRenderer.send("show-dev-tools"),
});
