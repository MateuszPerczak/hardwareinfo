import { useContext } from "react";

import { Button, InfoBar, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";

export const Usb = (): JSX.Element => {
  const {
    hardware: { usb },
    getSpecificHardware,
    getHardwareStatus,
  } = useContext(HardwareContext);

  const refresh = (): Promise<void> => getSpecificHardware("usb");

  const { isLoading, error } = getHardwareStatus("usb");
  return (
    <Page
      name="Usb"
      menu={
        <Button
          icon={Icons.Refresh}
          label="Refresh"
          onClick={refresh}
          disabled={isLoading || error}
        />
      }
      content={
        <>
          {error && (
            <InfoBar
              type="error"
              title="Error"
              description="An unexpected error occurred while retrieving hardware information."
            />
          )}
          {isLoading && <Spinner />}
          {!isLoading &&
            usb &&
            usb.map((usbDevice, index) => (
              <Panel
                key={`usb-device-${index}-${usbDevice.id}`}
                icon={Icons.Usb}
                label={usbDevice.type}
                description={String(usbDevice.deviceId)}
              ></Panel>
            ))}
        </>
      }
    />
  );
};
