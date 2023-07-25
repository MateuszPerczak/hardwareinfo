import { ipcMain } from "electron/main";

import { getMemoryInformation, getMemoryLayout } from "./memory";
import { getCpuInformation } from "./processor";

export const initApi = (): void => {
  // ipcMain.on("show-dev-tools", ({ sender }) => {
  //   const window = BrowserWindow.fromWebContents(sender);
  //   window && window.webContents.openDevTools();
  // });

  // memory
  ipcMain.handle("getMemoryLayout", getMemoryLayout);
  ipcMain.handle("getMemoryInformation", getMemoryInformation);
  // cpu
  ipcMain.handle("getCpuInformation", getCpuInformation);
};
