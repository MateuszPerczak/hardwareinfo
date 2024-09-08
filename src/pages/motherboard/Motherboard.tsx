import { useContext } from "react";
import type { Systeminformation } from "systeminformation";

import { Button, DataPanel, InfoBar, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";

import {
  biosInformationTemplate,
  motherboardInformationTemplate,
} from "./Motherboard.templates";

export const Motherboard = (): JSX.Element => {
  const {
    hardware: { motherboard, bios },
    getSpecificHardware,
    getHardwareStatus,
  } = useContext(HardwareContext);

  const refresh = (): void => {
    getSpecificHardware("bios");
    getSpecificHardware("motherboard");
  };

  const { isLoading, error } = getHardwareStatus("bios", "motherboard");
  return (
    <Page
      name="Motherboard"
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
          {!isLoading && bios && (
            <Panel icon={Icons.Info} label="Bios">
              <DataPanel<Systeminformation.BiosData>
                style={{ padding: "10px 10px 10px 49px" }}
                template={biosInformationTemplate}
                data={bios}
              />
            </Panel>
          )}

          {!isLoading && motherboard && (
            <Panel
              icon={Icons.Motherboard}
              label={motherboard.model}
              description={motherboard.serial}
            >
              <DataPanel<Systeminformation.BaseboardData>
                style={{ padding: "10px 10px 10px 49px" }}
                template={motherboardInformationTemplate}
                data={motherboard}
              />
            </Panel>
          )}
        </>
      }
    />
  );
};
