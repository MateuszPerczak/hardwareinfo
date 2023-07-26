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

const Processor = (): JSX.Element => {
  const { getProcessorInformation } = useApi();

  const processorInformation: Systeminformation.CpuData = use(getProcessorInformation());

  const processorTemplate: DataTemplate<Systeminformation.CpuData>[] = [
    {
      key: "brand",
      label: "Brand",
      type: DataType.String,
    },
    {
      key: "manufacturer",
      label: "Manufacturer",
      type: DataType.String,
    },
    {
      key: "vendor",
      label: "Vendor",
      type: DataType.String,
    },
    {
      key: "family",
      label: "Family",
      type: DataType.String,
    },
    {
      key: "model",
      label: "Model",
      type: DataType.String,
    },
    {
      key: "stepping",
      label: "Stepping",
      type: DataType.String,
    },
    {
      key: "revision",
      label: "Revision",
      type: DataType.String,
    },
    {
      key: "voltage",
      label: "Voltage",
      type: DataType.Volt,
    },
    {
      key: "speed",
      label: "Speed",
      type: DataType.Megahertz,
    },
    {
      key: "speedMin",
      label: "Speed min",
      type: DataType.Megahertz,
    },
  ];

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
            label={`${processorInformation.manufacturer} ${processorInformation.brand}`}
            description={processorInformation.family}
            header={<Button icon={Icons.Copy} label="Copy" />}
          >
            <DataPanel<Systeminformation.CpuData>
              padding="10px 10px 10px 49px"
              template={processorTemplate}
              data={processorInformation}
            />
          </Panel>
        </>
      }
    />
  );
};

export default Processor;
