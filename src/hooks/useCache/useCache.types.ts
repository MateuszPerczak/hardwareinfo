export type UseCacheReturn<R> = {
  data: R | null;
  fetch: () => void;
};
