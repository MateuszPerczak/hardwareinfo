import { useMemo, useState } from "react";

import { hardwareProperties } from "./useHardware.hardware";
import type {
  HardwareId,
  HardwareProperties,
  HardwareState,
  HardwareStatus,
} from "./useHardware.types";

export const useHardware = () => {
  const hardwareIds: HardwareId[] = [
    "memory",
    "memoryLayout",
    "processor",
    "graphics",
    "bios",
    "motherboard",
    "network",
    "usb",
    "storage",
  ];

  const [state, setState] = useState<HardwareState>({
    status: hardwareIds.reduce(
      (acc, hardwareId) => ({
        ...acc,
        [hardwareId]: {
          isPreLoaded: false,
          isLoading: false,
          error: false,
        },
      }),
      {},
    ) as HardwareState["status"],
    hardware: {},
  });

  const _saveHardware = (
    hardwareId: HardwareId,
    hardware: Awaited<ReturnType<HardwareProperties["getHardware"]>>,
  ): void =>
    setState((prevState) => ({
      ...prevState,
      hardware: { ...prevState.hardware, [hardwareId]: hardware },
    }));

  const _updateStatus = (
    hardwareId: HardwareId,
    status: Partial<HardwareStatus>,
  ): void => {
    setState((prevState) => ({
      ...prevState,
      status: {
        ...prevState.status,
        [hardwareId]: { ...prevState.status[hardwareId], ...status },
      },
    }));
  };

  const preloadHardware = async (): Promise<void> => {
    setState((prevState) => ({
      ...prevState,
      status: Object.keys(prevState.status).reduce((acc, hardwareId) => {
        acc[hardwareId as HardwareId].isLoading = true;
        return acc;
      }, prevState.status),
    }));

    for (const { id, getHardware } of hardwareProperties) {
      try {
        const hardware = await getHardware();
        _saveHardware(id, hardware);
      } catch {
        _updateStatus(id, { error: true });
      } finally {
        _updateStatus(id, { isLoading: false, isPreLoaded: true });
      }
    }
  };

  const getHardware = async (): Promise<void> => {
    for (const { id, getHardware } of hardwareProperties) {
      _updateStatus(id, { isLoading: true });
      try {
        const hardware = await getHardware();
        _saveHardware(id, hardware);
      } catch {
        _updateStatus(id, { error: true });
      } finally {
        _updateStatus(id, { isLoading: false });
      }
    }
  };

  const getSpecificHardware = async (hardwareId: HardwareId): Promise<void> => {
    _updateStatus(hardwareId, { isLoading: true });
    const hardwareMatch = hardwareProperties.find(({ id }) => id === hardwareId);
    if (hardwareMatch === undefined) {
      throw new Error(`Cannot find hardware "${hardwareId}" `);
    }
    try {
      const hardware = await hardwareMatch.getHardware();
      _saveHardware(hardwareId, hardware);
    } catch {
      _updateStatus(hardwareId, { error: true });
    } finally {
      _updateStatus(hardwareId, { isLoading: false });
    }
  };

  const getHardwareStatus = (...hardwareIds: HardwareId[]): HardwareStatus => {
    return hardwareIds.reduce<HardwareStatus>(
      (acc, hardwareId) => ({
        ...acc,
        error: acc.error || state.status[hardwareId].error,
        isLoading: acc.isLoading || state.status[hardwareId].isLoading,
      }),
      {
        error: false,
        isLoading: false,
        isPreLoaded: false,
      },
    );
  };

  const isLoading = useMemo(
    () => Object.values(state.status).some(({ isLoading }) => isLoading),
    [state.status],
  );

  return {
    getSpecificHardware,
    getHardware,
    getHardwareStatus,
    preloadHardware,
    hardware: state.hardware,
    isLoading,
  } as const;
};
