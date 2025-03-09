import { useContext, useMemo } from "react";
import type { Systeminformation } from "systeminformation";

import { Badge, Button, DataPanel, InfoBar, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";

import {
  additionalStorageInformationTemplate,
  hddStorageInformationTemplate,
  storageInformationTemplate,
} from "./Storage.templates";

export const Storage = (): JSX.Element => {
  const { hardware, getSpecificHardware, getHardwareStatus } =
    useContext(HardwareContext);

  const refresh = (): Promise<void> => getSpecificHardware("storage");

  const { isLoading, error } = getHardwareStatus("storage");

  const storage = useMemo(() => hardware.storage ?? [], [hardware.storage]);

  return (
    <Page
      name="Storage"
      menu={
        <>
          <Badge
            icon={Icons.Storage}
            label={`Found ${storage.length} storage device${
              storage.length !== 1 ? "s" : ""
            }`}
          />
          <Button
            icon={Icons.Refresh}
            label="Refresh"
            onClick={refresh}
            disabled={isLoading || error}
          />
        </>
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
