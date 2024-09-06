import { usb, type Systeminformation } from "systeminformation";

export const getUSBformation = async (): Promise<Systeminformation.UsbData[]> =>
  await usb();
