//@ts-expect-error it exist
import { use } from "react";

import Page from "@/components/page/Page";
import useApi from "@/hooks/useApi/useApi";

const Network = (): JSX.Element => {
  const { getNetworkInformation, getNetworkStatsInformation } = useApi();

  const networkInformation = use(getNetworkInformation());

  const networkStatsInformation = use(getNetworkStatsInformation());

  console.log(networkInformation, networkStatsInformation);

  return <Page name="Network" content={<></>} />;
};

export default Network;
