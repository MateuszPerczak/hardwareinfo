import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useInformation from "@/stores/information/information";

import { memoryInformationTemplate, memoryLayoutTemplate } from "./Memory.templates";

const Memory = (): JSX.Element => {
  const { memory, memoryModules, updateMemoryModules, updateMemory } = useInformation(
    ({ memory, memoryModules, updateMemoryModules, updateMemory }) => ({
      memory,
      memoryModules,
      updateMemoryModules,
      updateMemory,
    }),
  );

  const refresh = async (): Promise<void> => {
    await updateMemory();
    await updateMemoryModules();
  };

  return (
    <Page
      name="Memory"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Refresh" onClick={refresh} />
        </>
      }
      content={
        <>
          {memory && (
            <Panel
              icon={Icons.Info}
              label="Memory information"
              header={<Button icon={Icons.Copy} label="Copy" />}
            >
              <DataPanel<Systeminformation.MemData>
                padding="10px 10px 10px 49px"
                template={memoryInformationTemplate}
                data={memory}
              />
            </Panel>
          )}

          {memoryModules &&
            memoryModules.map((memory) => (
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
