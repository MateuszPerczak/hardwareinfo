import type { BrowserWindow } from "electron";
export enum Environment {
    Development = "development",
    Production = "production"
}
export type AppContent = Record<Environment, (window: BrowserWindow) => void>
