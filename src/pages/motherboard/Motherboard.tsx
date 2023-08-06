//@ts-expect-error it exist
import { use, useEffect } from "react";
import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";

import {
  biosInformationTemplate,
  motherboardInformationTemplate,
} from "./Motherboard.templates";

const Motherboard = (): JSX.Element => {
  const { getBiosInformation, getMotherboardInformation, showDevTools } = useApi();

  const biosInformation: Systeminformation.BiosData = use(getBiosInformation());
  const motherboardInformation: Systeminformation.BaseboardData = use(
    getMotherboardInformation(),
  );

  console.log(biosInformation, motherboardInformation);

  useEffect(showDevTools, []);

  return (
    <Page
      name="Motherboard"
      content={
        <>
          <Panel
            icon={Icons.Info}
            label="Bios"
            header={<Button icon={Icons.Copy} label="Copy" />}
          >
            <DataPanel<Systeminformation.BiosData>
              padding="10px 10px 10px 49px"
              template={biosInformationTemplate}
              data={biosInformation}
            />
          </Panel>

          <Panel
            icon={Icons.Motherboard}
            label={motherboardInformation.model}
            description={motherboardInformation.serial}
            header={<Button icon={Icons.Copy} label="Copy" />}
          >
            <DataPanel<Systeminformation.BaseboardData>
              padding="10px 10px 10px 49px"
              template={motherboardInformationTemplate}
              data={motherboardInformation}
            />
          </Panel>
        </>
      }
    />
  );
};

export default Motherboard;
