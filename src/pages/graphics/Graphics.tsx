//@ts-expect-error it exist
import { use } from "react";
import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";

import { controllerInformationTemplate } from "./Graphics.templates";

const Graphics = (): JSX.Element => {
  const { getGraphicsInformation } = useApi();

  const { controllers }: Systeminformation.GraphicsData = use(getGraphicsInformation());

  return (
    <Page
      name="Graphics"
      content={
        <>
          {controllers.map((controller, index) => (
            <Panel
              icon={Icons.Graphics}
              label={controller.model}
              description={controller.vendor}
              header={<Button icon={Icons.Copy} label="Copy" />}
              key={`controller-${index}`}
            >
              <DataPanel<Systeminformation.GraphicsControllerData>
                padding="10px 10px 10px 49px"
                template={controllerInformationTemplate}
                data={controller}
              />
            </Panel>
          ))}
          {/* {displays.map((display, index) => (
            <Panel
              icon={Icons.Display}
              label={`Display ${index}`}
              header={<Button icon={Icons.Copy} label="Copy" />}
              key={`display-${index}`}
            >
              <DataPanel<Systeminformation.GraphicsDisplayData>
                padding="10px 10px 10px 49px"
                template={displayInformationTemplate}
                data={display}
              />
            </Panel>
          ))} */}
        </>
      }
    />
  );
};

export default Graphics;
