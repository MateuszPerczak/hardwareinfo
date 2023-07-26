import type { UseUnits } from "./useUnits.types";

const useUnits: UseUnits = () => {
  const convertBytes = (bytes: number): string => {
    const units = ["", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let unitIndex = 0;
    while (bytes >= 1024) {
      bytes /= 1024;
      unitIndex++;
    }
    return `${bytes.toFixed(2)} ${units[unitIndex]}`;
  };

  return {
    convertBytes,
  };
};

export default useUnits;
