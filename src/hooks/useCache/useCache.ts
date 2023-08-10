import { useCallback, useEffect, useState } from "react";

import type { UseCacheReturn } from "./useCache.types";

const useCache = <R>(key: string, apiMethod: () => Promise<R>): UseCacheReturn<R> => {
  const [data, setData] = useState<R | null>(() => {
    const cachedData = sessionStorage.getItem(key);
    if (cachedData !== null) {
      return JSON.parse(cachedData) as R;
    }
    return null;
  });

  const fetchAndCacheData = useCallback(async () => {
    try {
      const response = await apiMethod();
      setData(response);
      sessionStorage.setItem(key, JSON.stringify(response));
    } catch (error) {
      // for now we'r gonna ignore the error
    }
  }, [key, apiMethod, setData]);

  useEffect(() => {
    if (data !== null) return;
    fetchAndCacheData();
  }, [data, fetchAndCacheData]);

  return {
    data,
    fetch: fetchAndCacheData,
  };
};

export default useCache;
