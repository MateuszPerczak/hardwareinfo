//@ts-expect-error it exist
import { use } from "react";
import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";

import { memoryInformationTemplate, memoryLayoutTemplate } from "./Memory.templates";

const Memory = (): JSX.Element => {
  const { getMemoryLayout, getMemoryInformation } = useApi();

  const memoryInformation: Systeminformation.MemData = use(getMemoryInformation());
  const memoryLayout: Systeminformation.MemLayoutData[] = use(getMemoryLayout());

  return (
    <Page
      name="Memory"
      content={
        <>
          <Panel
            icon={Icons.Repair}
            label="Memory information"
            header={<Button icon={Icons.Copy} label="Copy" />}
          >
            <DataPanel<Systeminformation.MemData>
              padding="10px 10px 10px 49px"
              template={memoryInformationTemplate}
              data={memoryInformation}
            />
          </Panel>

          {memoryLayout.map((memory) => (
            <Panel
              icon={Icons.Memory}
              label={memory.manufacturer}
              description={memory.partNum}
              key={`${memory.serialNum}`}
              header={<Button icon={Icons.Copy} label="Copy" />}
            >
              <DataPanel<Systeminformation.MemLayoutData>
                padding="10px 10px 10px 49px"
                template={memoryLayoutTemplate}
                data={memory}
              />
            </Panel>
          ))}
        </>
      }
    />
  );
};

export default Memory;
