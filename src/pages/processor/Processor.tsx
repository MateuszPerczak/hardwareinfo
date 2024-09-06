import type { Systeminformation } from "systeminformation";

import { Button, DataPanel, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";

import {
  cacheInformationTemplate,
  processorInformationTemplate,
} from "./Processor.templates";
import { HardwareContext } from "@/contexts";
import { useContext } from "react";

export const Processor = (): JSX.Element => {
  const {
    hardware: { processor },
    getSpecificHardware,
    status,
  } = useContext(HardwareContext);

  const refresh = () => getSpecificHardware("processor");

  const isLoading = status.processor === "loading";

  return (
    <Page
      name="Processor"
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
          {!isLoading && processor && (
            <Panel
              icon={Icons.Processor}
              label={processor.manufacturer}
              description={processor.brand}
              header={<Button icon={Icons.Copy} label="Copy" />}
            >
              <DataPanel<Systeminformation.CpuData>
                style={{ padding: "10px 10px 10px 49px" }}
                template={processorInformationTemplate}
                data={processor}
              />
              <DataPanel<Systeminformation.CpuCacheData>
                style={{ padding: "10px 10px 10px 49px" }}
                template={cacheInformationTemplate}
                data={processor.cache}
              />
            </Panel>
          )}
        </>
      }
    />
  );
};
