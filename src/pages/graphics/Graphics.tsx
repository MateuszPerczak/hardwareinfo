import { useContext } from "react";
import type { Systeminformation } from "systeminformation";

import { Icons } from "@/components/icon/Icon.types";
import { Button, DataPanel, InfoBar, Page, Panel, Spinner } from "@/components/index";
import { HardwareContext } from "@/contexts";

import {
  displayInformationTemplate,
  graphicsInformationTemplate,
} from "./Graphics.templates";

export const Graphics = (): JSX.Element => {
  const {
    hardware: { graphics },
    getSpecificHardware,
    getHardwareStatus,
  } = useContext(HardwareContext);

  const refresh = (): Promise<void> => getSpecificHardware("graphics");

  const { isLoading, error } = getHardwareStatus("graphics");
  return (
    <Page
      name="Graphics"
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
            graphics &&
            graphics.controllers.map((controller, index) => (
              <Panel
                icon={Icons.Graphics}
                label={controller.model}
                description={controller.vendor}
                key={`controller-${index}`}
              >
                <DataPanel<Systeminformation.GraphicsControllerData>
                  style={{ padding: "10px 10px 10px 49px" }}
                  template={graphicsInformationTemplate}
                  data={controller}
                />
              </Panel>
            ))}
          {!isLoading &&
            graphics &&
            graphics.displays.map((display, index) => (
              <Panel
                icon={Icons.Display}
                label={display.model}
                description={display.vendor}
                key={`controller-${index}`}
              >
                <DataPanel<Systeminformation.GraphicsDisplayData>
                  style={{ padding: "10px 10px 10px 49px" }}
                  template={displayInformationTemplate}
                  data={display}
                />
              </Panel>
            ))}
        </>
      }
    />
  );
};
