import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useInformation from "@/stores/information/information";

import {
  cacheInformationTemplate,
  processorInformationTemplate,
} from "./Processor.templates";

const Processor = (): JSX.Element => {
  const { processor, updateProcessor } = useInformation(
    ({ processor, updateProcessor }) => ({
      processor,
      updateProcessor,
    }),
  );

  const refresh = async (): Promise<void> => {
    await updateProcessor();
  };

  return (
    <Page
      name="Processor"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Refresh" onClick={refresh} />
        </>
      }
      content={
        <>
          {processor && (
            <Panel
              icon={Icons.Processor}
              label={processor.manufacturer}
              description={processor.brand}
              header={<Button icon={Icons.Copy} label="Copy" />}
            >
              <DataPanel<Systeminformation.CpuData>
                style={{ padding: "10px 10px 10px 49px" }}
                template={processorInformationTemplate}
                data={processor}
              />
              <DataPanel<Systeminformation.CpuCacheData>
                style={{ padding: "10px 10px 10px 49px" }}
                template={cacheInformationTemplate}
                data={processor.cache}
              />
            </Panel>
          )}
        </>
      }
    />
  );
};

export default Processor;
