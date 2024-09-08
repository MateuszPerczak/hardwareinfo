import { diskLayout, type Systeminformation } from "systeminformation";

export const getStorageInformation = async (): Promise<
  Systeminformation.DiskLayoutData[]
> => await diskLayout();
