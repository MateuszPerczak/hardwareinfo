import { useContext } from "react";
import type { Systeminformation } from "systeminformation";

import { Button, DataPanel, InfoBar, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";

import {
  additionalStorageInformationTemplate,
  hddStorageInformationTemplate,
  storageInformationTemplate,
} from "./Storage.templates";

export const Storage = (): JSX.Element => {
  const {
    hardware: { storage },
    getSpecificHardware,
    getHardwareStatus,
  } = useContext(HardwareContext);

  const refresh = (): Promise<void> => getSpecificHardware("storage");

  const { isLoading, error } = getHardwareStatus("storage");

  console.log(storage);

  return (
    <Page
      name="Storage"
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
            storage &&
            storage.map((storageDevice) => (
              <Panel
                icon={Icons.Storage}
                label={storageDevice.vendor || "Disk Device"}
                description={storageDevice.name}
                key={storageDevice.serialNum}
              >
                <DataPanel<Systeminformation.DiskLayoutData>
                  style={{ padding: "10px 10px 10px 49px" }}
                  template={storageInformationTemplate}
                  data={storageDevice}
                />
                <DataPanel<Systeminformation.DiskLayoutData>
                  style={{ padding: "10px 10px 10px 49px" }}
                  template={additionalStorageInformationTemplate}
                  data={storageDevice}
                />
                {storageDevice.type === "HD" && (
                  <DataPanel<Systeminformation.DiskLayoutData>
                    style={{ padding: "10px 10px 10px 49px" }}
                    template={hddStorageInformationTemplate}
                    data={storageDevice}
                  />
                )}
              </Panel>
            ))}
        </>
      }
    />
  );
};
