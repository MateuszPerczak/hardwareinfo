import { useContext } from "react";
import type { Systeminformation } from "systeminformation";

import { Badge, Button, DataPanel, InfoBar, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";

import { memoryInformationTemplate, memoryLayoutTemplate } from "./Memory.templates";

export const Memory = (): JSX.Element => {
  const {
    hardware: { memory, memoryLayout },
    getSpecificHardware,
    getHardwareStatus,
  } = useContext(HardwareContext);

  const refresh = (): void => {
    getSpecificHardware("memory");
    getSpecificHardware("memoryLayout");
  };

  const { isLoading, error } = getHardwareStatus("memory", "memoryLayout");

  return (
    <Page
      name="Memory"
      menu={
        <>
          <Badge
            icon={Icons.Memory}
            label={`Found ${memoryLayout?.length ?? 0} ram stick${
              (memoryLayout?.length ?? 0) !== 1 ? "s" : ""
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
          {!isLoading && memory && (
            <Panel icon={Icons.Info} label="Memory information">
              <DataPanel<Systeminformation.MemData>
                style={{ padding: "10px 10px 10px 49px" }}
                template={memoryInformationTemplate}
                data={memory}
              />
            </Panel>
          )}
          {!isLoading &&
            memoryLayout &&
            memoryLayout.map((memory) => (
              <Panel
                icon={Icons.Memory}
                label={memory.manufacturer}
                description={memory.partNum}
                key={`${memory.serialNum}`}
              >
                <DataPanel<Systeminformation.MemLayoutData>
                  style={{ padding: "10px 10px 10px 49px" }}
                  template={memoryLayoutTemplate}
                  data={memory}
                />
              </Panel>
            ))}
        </>
      }
    />
  );
};
