import type { Systeminformation } from "systeminformation";

import Button from "@/components/button/Button";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import useApi from "@/hooks/useApi/useApi";
import useCache from "@/hooks/useCache/useCache";

const Network = (): JSX.Element => {
  const { getNetworkInformation, getNetworkStatsInformation } = useApi();

  const { data, fetch } = useCache<
    Systeminformation.NetworkInterfacesData | Systeminformation.NetworkInterfacesData[]
  >("networkInformation", getNetworkInformation);

  // const networkInformation = use(getNetworkInformation());

  // const networkStatsInformation = use(getNetworkStatsInformation());

  // console.log(data);

  return (
    <Page
      name="Network"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Refresh" onClick={fetch} />
        </>
      }
      content={<>{data && <Panel icon={Icons.Network}>Sucess</Panel>}</>}
    />
  );
};

export default Network;
