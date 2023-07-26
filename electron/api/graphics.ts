import { graphics, type Systeminformation } from "systeminformation";

export const getGraphicsInformation = async (): Promise<Systeminformation.GraphicsData> =>
  await graphics();
