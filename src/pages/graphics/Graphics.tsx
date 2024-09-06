import type { Systeminformation } from "systeminformation";

import { Icons } from "@/components/icon/Icon.types";
import { Button, DataPanel, Page, Panel, Spinner } from "@/components/index";

import { controllerInformationTemplate } from "./Graphics.templates";
import { HardwareContext } from "@/contexts";
import { useContext } from "react";

export const Graphics = (): JSX.Element => {
  const {
    hardware: { graphics },
    getSpecificHardware,
    status,
  } = useContext(HardwareContext);

  const refresh = () => getSpecificHardware("graphics");

  const isLoading = status.graphics === "loading";

  return (
    <Page
      name="Graphics"
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
            graphics &&
            graphics.controllers.map((controller, index) => (
              <Panel
                icon={Icons.Graphics}
                label={controller.model}
                description={controller.vendor}
                header={<Button icon={Icons.Copy} label="Copy" />}
                key={`controller-${index}`}
              >
                <DataPanel<Systeminformation.GraphicsControllerData>
                  style={{ padding: "10px 10px 10px 49px" }}
                  template={controllerInformationTemplate}
                  data={controller}
                />
              </Panel>
            ))}
        </>
      }
    />
  );
};
