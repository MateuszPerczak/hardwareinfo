import { use, useLayoutEffect, useState } from "react";
import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import GridPanel from "@/components/gridPanel/GridPanel";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";
import useUnits from "@/hooks/useUnits/useUnits";

const Memory = (): JSX.Element => {
  const { getMemoryLayout, getMemoryInformation } = useApi();
  const { bytesToGiB } = useUnits();

  // const lol = use(getMemoryLayout());

  const { total, swaptotal }: Systeminformation.MemData = use(getMemoryInformation());

  // const [memoryInformation, setMemoryInformation] = useState<number>(0);

  // const getMemoryInformationHandler = async (): Promise<void> => {
  //   const data = await getMemoryInformation();
  //   console.log(data);
  //   console.log();
  //   setMemoryInformation(Math.ceil(bytesToGiB(data.total)));
  // };

  // useLayoutEffect(() => {
  //   getMemoryInformationHandler();
  // }, []);

  return (
    <Page
      name="Memory"
      content={
        <>
          <Panel icon={Icons.Repair} label="Memory information">
            <GridPanel padding="10px 10px 10px 49px">
              <span className="grid-name">Total size</span>
              <span className="grid-value">{bytesToGiB(total)} GB</span>
              <span className="grid-name">Swap size</span>
              <span className="grid-value">{bytesToGiB(swaptotal)} GB</span>
            </GridPanel>
          </Panel>
          {/* <Panel
            icon={Icons.Memory}
            label="ChanelA-DIMM1"
            header={
              <Button
                icon={Icons.Copy}
                label="Copy"
                onClick={getMemoryInformationHandler}
              />
            }
          >
            <GridPanel padding="10px 10px 10px 49px">
              <span className="grid-name">Brand</span>
              <span className="grid-value">Kingston</span>
              <span className="grid-name">Manufacture</span>
              <span className="grid-value">Nanya Technology</span>
            </GridPanel>
          </Panel> */}
        </>
      }
    />
  );
};

export default Memory;
