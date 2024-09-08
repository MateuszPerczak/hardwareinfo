import type { HardwareProperties } from "./useHardware.types";

export const hardwareProperties: HardwareProperties[] = [
  {
    id: "processor",
    getHardware: async () => window.api.getProcessorInformation(),
  },
  {
    id: "memory",
    getHardware: async () => window.api.getMemoryInformation(),
  },
  {
    id: "memoryLayout",
    getHardware: async () => window.api.getMemoryLayout(),
  },
  {
    id: "bios",
    getHardware: async () => window.api.getBiosInformation(),
  },
  {
    id: "motherboard",
    getHardware: async () => window.api.getMotherboardInformation(),
  },
  {
    id: "graphics",
    getHardware: async () => window.api.getGraphicsInformation(),
  },
  {
    id: "network",
    getHardware: async () => window.api.getNetworkInformation(),
  },
  {
    id: "usb",
    getHardware: async () => window.api.getUSBformation(),
  },
  {
    id: "storage",
    getHardware: async () => window.api.getStorageInformation(),
  },
];
