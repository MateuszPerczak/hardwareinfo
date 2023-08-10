import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";
import useCache from "@/hooks/useCache/useCache";

import { controllerInformationTemplate } from "./Graphics.templates";

const Graphics = (): JSX.Element => {
  const { getGraphicsInformation } = useApi();

  const { data, fetch } = useCache<Systeminformation.GraphicsData>(
    "graphicsInformation",
    getGraphicsInformation,
  );

  return (
    <Page
      name="Graphics"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Refresh" onClick={fetch} />
        </>
      }
      content={
        <>
          {data &&
            data.controllers.map((controller, index) => (
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
        </>
      }
    />
  );
};

export default Graphics;
