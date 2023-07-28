import { baseboard, bios, chassis, type Systeminformation } from "systeminformation";

export const getBiosInformation = async (): Promise<Systeminformation.BiosData> =>
  await bios();

export const getMotherboardInformation =
  async (): Promise<Systeminformation.BaseboardData> => await baseboard();
