import { useMemo } from "react";

const useDate = () => {
  return useMemo(() => {
    return new Date().getFullYear();
  }, []);
};

export default useDate;
