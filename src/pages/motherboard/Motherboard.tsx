import type { Systeminformation } from "systeminformation";

import { Icons } from "@/components/icon/Icon.types";

import {
  biosInformationTemplate,
  motherboardInformationTemplate,
} from "./Motherboard.templates";
import { Button, DataPanel, Page, Panel, Spinner } from "@/components";
import { HardwareContext } from "@/contexts";
import { useContext } from "react";

export const Motherboard = (): JSX.Element => {
  const {
    hardware: { motherboard, bios },
    getSpecificHardware,
    status,
  } = useContext(HardwareContext);

  const refresh = () => {
    getSpecificHardware("bios");
    getSpecificHardware("motherboard");
  };

  const isLoading = status.bios === "loading" || status.motherboard === "loading";

  return (
    <Page
      name="Motherboard"
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
          {!isLoading && bios && (
            <Panel
              icon={Icons.Info}
              label="Bios"
              header={<Button icon={Icons.Copy} label="Copy" />}
            >
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
              header={<Button icon={Icons.Copy} label="Copy" />}
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
