import { create, type StoreApi, type UseBoundStore } from "zustand";

import type { InformationState } from "./information.types";

const useInformation: UseBoundStore<StoreApi<InformationState>> =
  create<InformationState>((set) => ({
    processor: null,
    updateProcessor: async (): Promise<void> => {
      const processor = await window.api.getProcessorInformation();
      set((prevState) => ({ ...prevState, processor }));
    },
    memory: null,
    updateMemory: async (): Promise<void> => {
      const memory = await window.api.getMemoryInformation();
      set((prevState) => ({ ...prevState, memory }));
    },
    memoryModules: null,
    updateMemoryModules: async (): Promise<void> => {
      const memoryModules = await window.api.getMemoryLayout();
      set((prevState) => ({ ...prevState, memoryModules }));
    },
  }));

export default useInformation;
