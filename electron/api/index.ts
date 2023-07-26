import { BrowserWindow, ipcMain } from "electron/main";

import { getGraphicsInformation } from "./graphics";
import { getMemoryInformation, getMemoryLayout } from "./memory";
import { getProcessorInformation } from "./processor";
import { getStorageInformation } from "./storage";

export const initApi = (): void => {
  ipcMain.on("show-dev-tools", ({ sender }) => {
    const window = BrowserWindow.fromWebContents(sender);
    window && window.webContents.openDevTools();
  });

  // memory
  ipcMain.handle("getMemoryLayout", getMemoryLayout);
  ipcMain.handle("getMemoryInformation", getMemoryInformation);
  // cpu
  ipcMain.handle("getProcessorInformation", getProcessorInformation);
  // storage
  ipcMain.handle("getStorageInformation", getStorageInformation);
  // graphics
  ipcMain.handle("getGraphicsInformation", getGraphicsInformation);
};
