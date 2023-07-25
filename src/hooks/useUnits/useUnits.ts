import type { UseUnits } from "./useUnits.types";

const useUnits: UseUnits = () => {
  const bytesToGiB = (bytes: number): number => {
    return bytes / 1024 / 1024 / 1024;
  };

  return {
    bytesToGiB,
  };
};

export default useUnits;
