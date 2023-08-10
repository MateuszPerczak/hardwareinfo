import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";
import useCache from "@/hooks/useCache/useCache";

import {
  cacheInformationTemplate,
  processorInformationTemplate,
} from "./Processor.templates";

const Processor = (): JSX.Element => {
  const { getProcessorInformation } = useApi();

  const { data: processorInformation, fetch } = useCache<Systeminformation.CpuData>(
    "processorInformation",
    getProcessorInformation,
  );

  return (
    <Page
      name="Processor"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Refresh" onClick={fetch} />
        </>
      }
      content={
        <>
          {processorInformation && (
            <Panel
              icon={Icons.Processor}
              label={processorInformation.manufacturer}
              description={processorInformation.brand}
              header={<Button icon={Icons.Copy} label="Copy" />}
            >
              <DataPanel<Systeminformation.CpuData>
                padding="10px 10px 10px 49px"
                template={processorInformationTemplate}
                data={processorInformation}
              />
              <DataPanel<Systeminformation.CpuCacheData>
                padding="10px 10px 10px 49px"
                template={cacheInformationTemplate}
                data={processorInformation.cache}
              />
            </Panel>
          )}
        </>
      }
    />
  );
};

export default Processor;
