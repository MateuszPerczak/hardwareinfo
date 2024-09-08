import { useContext } from "react";
import type { Systeminformation } from "systeminformation";

import { Button, DataPanel, InfoBar, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";

import {
  cacheInformationTemplate,
  processorInformationTemplate,
} from "./Processor.templates";

export const Processor = (): JSX.Element => {
  const {
    hardware: { processor },
    getSpecificHardware,
    getHardwareStatus,
  } = useContext(HardwareContext);

  const refresh = (): Promise<void> => getSpecificHardware("processor");

  const { isLoading, error } = getHardwareStatus("processor");

  return (
    <Page
      name="Processor"
      menu={
        <Button
          icon={Icons.Refresh}
          label="Refresh"
          onClick={refresh}
          disabled={isLoading}
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
          {!isLoading && processor && (
            <Panel
              icon={Icons.Processor}
              label={processor.manufacturer}
              description={processor.brand}
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
