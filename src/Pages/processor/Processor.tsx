//@ts-expect-error it exist
import { use } from "react";
import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import DataPanel from "@/components/dataPanel/DataPanel";
import { type DataTemplate, DataType } from "@/components/dataPanel/DataPanel.types";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";

import { processorInformationTemplate } from "./Processor.templates";

const Processor = (): JSX.Element => {
  const { getProcessorInformation } = useApi();

  const processorInformation: Systeminformation.CpuData = use(getProcessorInformation());

  return (
    <Page
      name="Processor"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Refresh" />
        </>
      }
      content={
        <>
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
          </Panel>
        </>
      }
    />
  );
};

export default Processor;
