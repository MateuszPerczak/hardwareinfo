import { useContext, useMemo } from "react";

import { Button, DataPanel, InfoBar, Page, Panel, Spinner } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";

import {
  ip6InformationTemplate,
  ipv4InformationTemplate,
  networkInformationTemplate,
} from "./Network.templates";

export const Network = (): JSX.Element => {
  const {
    hardware: { network },
    getSpecificHardware,
    getHardwareStatus,
  } = useContext(HardwareContext);

  const refresh = (): Promise<void> => getSpecificHardware("network");

  const { isLoading, error } = getHardwareStatus("network");

  const networkAdapters = useMemo(() => {
    if (network === undefined) {
      return;
    }
    return Array.isArray(network) ? network : [network];
  }, [network]);

  return (
    <Page
      name="Network"
      menu={
        <Button
          icon={Icons.Refresh}
          label="Refresh"
          onClick={refresh}
          disabled={isLoading || error}
        />
      }
      content={
        <>
          {error && (
            <InfoBar
              type="error"
              title="Error"
              description="An unexpected error occurred while retrieving hardware information."
            />
          )}
          {isLoading && <Spinner />}
          {!isLoading &&
            networkAdapters &&
            networkAdapters.map((networkAdapter, index) => (
              <Panel
                icon={Icons.Network}
                label={networkAdapter?.ifaceName}
                description={networkAdapter?.iface}
                key={`network-adapter-${index}`}
              >
                <DataPanel
                  data={networkAdapter}
                  template={networkInformationTemplate}
                  style={{ padding: "10px 10px 10px 49px" }}
                />
                <DataPanel
                  data={networkAdapter}
                  template={ipv4InformationTemplate}
                  style={{ padding: "10px 10px 10px 49px" }}
                />
                <DataPanel
                  data={networkAdapter}
                  template={ip6InformationTemplate}
                  style={{ padding: "10px 10px 10px 49px" }}
                />
              </Panel>
            ))}
        </>
      }
    />
  );
};

{
  /* <Panel
icon={Icons.Network}
label="DsaDasfs"
description="Network adapter"
header={<></>}
>
<DataPanel data={{}} template={networkInformationTemplate} />
</Panel> */
}
