import { Button, DataPanel, Page, Panel } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";
import { useContext } from "react";
import { networkInformationTemplate } from "./Network.templates";

export const Network = (): JSX.Element => {
  const {
    hardware: { network, networkStats },
    getSpecificHardware,
    status,
  } = useContext(HardwareContext);

  const refresh = () => {
    getSpecificHardware("network");
    getSpecificHardware("networkStats");
  };

  const isLoading = status.network === "loading" || status.networkStats === "loading";

  // const networkInformation = use(getNetworkInformation());

  // const networkStatsInformation = use(getNetworkStatsInformation());

  console.log({ network, networkStats });

  const networkAdapters = Array.isArray(network) ? network : [network];

  return (
    <Page
      name="Network"
      menu={
        <>
          <Button
            icon={Icons.Refresh}
            label="Refresh"
            onClick={refresh}
            disabled={isLoading}
          />
        </>
      }
      content={
        <>
          {!isLoading && networkAdapters && (
            <Panel
              icon={Icons.Network}
              label="DsaDasfs"
              description="Network adapter"
              header={<></>}
            >
              <DataPanel data={{}} template={networkInformationTemplate} />
            </Panel>
          )}
        </>
      }
    />
  );
};
