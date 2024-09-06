import { Button, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";
import { useContext } from "react";

export const Usb = (): JSX.Element => {
  const {
    hardware: { usb },
    getSpecificHardware,
    status,
  } = useContext(HardwareContext);

  const refresh = () => getSpecificHardware("usb");

  const isLoading = status.usb === "loading";

  return (
    <Page
      name="Usb"
      menu={
        <>
          <Button
            icon={Icons.Refresh}
            label="Refresh"
            onClick={refresh}
            disabled={isLoading}
          />
        </>
      }
      content={
        <>
          {isLoading && <Spinner />}
          {!isLoading &&
            usb &&
            usb.map((usbDevice) => (
              <>
                {console.log(usbDevice)}
                <Panel
                  icon={Icons.Usb}
                  label={usbDevice.type}
                  description={String(usbDevice.deviceId)}
                ></Panel>
              </>
            ))}
        </>
      }
    />
  );
};
