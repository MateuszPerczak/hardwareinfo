//@ts-expect-error it exist
import { use, useEffect } from "react";
import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";
import useCache from "@/hooks/useCache/useCache";

import {
  biosInformationTemplate,
  motherboardInformationTemplate,
} from "./Motherboard.templates";

const Motherboard = (): JSX.Element => {
  const { getBiosInformation, getMotherboardInformation } = useApi();

  const { data: biosInformation, fetch: fetchBiosInformation } =
    useCache<Systeminformation.BiosData>("biosInformation", getBiosInformation);

  const { data: motherboardInformation, fetch: fetchMotherboardInformation } =
    useCache<Systeminformation.BaseboardData>(
      "motherboardInformation",
      getMotherboardInformation,
    );

  const fetch = (): void => {
    fetchBiosInformation();
    fetchMotherboardInformation();
  };

  return (
    <Page
      name="Motherboard"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Refresh" onClick={fetch} />
        </>
      }
      content={
        <>
          {biosInformation && (
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
          )}

          {motherboardInformation && (
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
          )}
        </>
      }
    />
  );
};

export default Motherboard;
