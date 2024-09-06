import { useEffect, useMemo, useState } from "react";

import type {
  HardwareId,
  HardwareProperties,
  HardwareState,
  Status,
} from "./useHardware.types";
import { hardwareProperties } from "./useHardware.hardware";

export const useHardware = () => {
  const [state, setState] = useState<HardwareState>({
    status: {
      memory: "loading",
      memoryLayout: "loading",
      processor: "loading",
      graphics: "loading",
      bios: "loading",
      motherboard: "loading",
      network: "loading",
      networkStats: "loading",
      usb: "loading",
    },
    hardware: {},
  });

  const _saveHardware = (
    hardwareId: HardwareId,
    hardware: Awaited<ReturnType<HardwareProperties["getHardware"]>>,
  ) =>
    setState((prevState) => ({
      ...prevState,
      hardware: { ...prevState.hardware, [hardwareId]: hardware },
    }));

  const _updateStatus = (hardwareId: HardwareId, status: Status) => {
    setState((prevState) => ({
      ...prevState,
      status: { ...prevState.status, [hardwareId]: status },
    }));
  };

  const getHardware = async () => {
    for (const { id, getHardware } of hardwareProperties) {
      _updateStatus(id, "loading");
      try {
        const hardware = await getHardware();
        _saveHardware(id, hardware);
      } catch (error) {
        //
      } finally {
        _updateStatus(id, "done");
      }
    }
  };

  const getSpecificHardware = async (hardwareId: HardwareId) => {
    _updateStatus(hardwareId, "loading");
    const hardwareMatch = hardwareProperties.find(({ id }) => id === hardwareId);
    if (hardwareMatch === undefined) {
      throw new Error(`Cannot find hardware "${hardwareId}" `);
    }
    try {
      const hardware = await hardwareMatch.getHardware();
      _saveHardware(hardwareId, hardware);
      //
    } finally {
      _updateStatus(hardwareId, "done");
    }
  };

  const isBusy = useMemo(
    () => Object.values(state.status).some((status) => status === "loading"),
    [state.status],
  );

  return {
    getSpecificHardware,
    getHardware,
    status: state.status,
    hardware: state.hardware,
    isBusy,
  } as const;
};
