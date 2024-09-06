import type { Systeminformation } from "systeminformation";

import { Button, DataPanel, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";

import { memoryInformationTemplate, memoryLayoutTemplate } from "./Memory.templates";
import { useContext } from "react";
import { HardwareContext } from "@/contexts";

export const Memory = (): JSX.Element => {
  const {
    hardware: { memory, memoryLayout },
    getSpecificHardware,
    status,
  } = useContext(HardwareContext);

  const refresh = async () => {
    getSpecificHardware("memory");
    getSpecificHardware("memoryLayout");
  };

  const isLoading = status.memory === "loading" || status.memoryLayout === "loading";

  return (
    <Page
      name="Memory"
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
          {!isLoading && memory && (
            <Panel
              icon={Icons.Info}
              label="Memory information"
              header={<Button icon={Icons.Copy} label="Copy" />}
            >
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
                header={<Button icon={Icons.Copy} label="Copy" />}
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
