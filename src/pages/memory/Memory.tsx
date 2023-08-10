import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";
import useCache from "@/hooks/useCache/useCache";

import { memoryInformationTemplate, memoryLayoutTemplate } from "./Memory.templates";

const Memory = (): JSX.Element => {
  const { getMemoryLayout, getMemoryInformation } = useApi();

  const { data: memoryInformation, fetch: fetchMemoryInformation } =
    useCache<Systeminformation.MemData>("memoryInformation", getMemoryInformation);
  const { data: memoryLayout, fetch: fetchMemoryLayout } = useCache<
    Systeminformation.MemLayoutData[]
  >("memoryLayout", getMemoryLayout);

  const fetch = (): void => {
    fetchMemoryInformation();
    fetchMemoryLayout();
  };

  return (
    <Page
      name="Memory"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Refresh" onClick={fetch} />
        </>
      }
      content={
        <>
          {memoryInformation && (
            <Panel
              icon={Icons.Info}
              label="Memory information"
              header={<Button icon={Icons.Copy} label="Copy" />}
            >
              <DataPanel<Systeminformation.MemData>
                padding="10px 10px 10px 49px"
                template={memoryInformationTemplate}
                data={memoryInformation}
              />
            </Panel>
          )}

          {memoryLayout &&
            memoryLayout.map((memory) => (
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
