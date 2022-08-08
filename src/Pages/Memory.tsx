import { FC } from "react";

import Button from "../Components/Button/Button";
import Icon from "../Components/Icon/Icon";
import Text from "../Components/Text/Text";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelContent from "../Components/PanelContent/PanelContent";
import PanelGrid from "../Components/PanelGrid/PanelGrid";
import PanelHeader from "../Components/PanelHeader/PanelHeader";

const Memory: FC = (): JSX.Element => {
  return (
    <Page header="Memory">
      <Panel>
        <PanelHeader icon="&#xE15E;" header="Memory configuration" />
        <PanelContent>
          <PanelGrid
            content={[
              ["Chanel", "Dual"],
              ["Total size", "16 GBytes"],
              ["Dram frequency", "1200 Mhz"],
            ]}
          />
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xEEA0;" header="ChanelA-DIMM1">
          <Button>
            <Icon>&#xE16F;</Icon>
            <Text>Copy</Text>
          </Button>
        </PanelHeader>
        <PanelContent>
          <PanelGrid
            content={[
              ["Name", "Kingston"],
              ["Manufacture", "Nanya Technology"],
              ["Part number", "	KHX2400C15/8G"],
              ["Serial number", "ED27233B"],
              ["Type", "DDR4"],
              ["Size", "8192 MBytes"],
              ["Voltage", "1.2 V"],
              ["Speed", "2400 Mhz"],
            ]}
          />
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xEEA0;" header="ChanelB-DIMM1">
          <Button>
            <Icon>&#xE16F;</Icon>
            <Text>Copy</Text>
          </Button>
        </PanelHeader>
        <PanelContent>
          <PanelGrid
            content={[
              ["Name", "Kingston"],
              ["Manufacture", "SK Hynix"],
              ["Part number", "	KHX2400C15/8G"],
              ["Serial number", "ED27233B"],
              ["Type", "DDR4"],
              ["Size", "8192 MBytes"],
              ["Voltage", "1.2 V"],
              ["Speed", "2400 Mhz"],
            ]}
          />
        </PanelContent>
      </Panel>
    </Page>
  );
};

export default Memory;
