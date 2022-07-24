import { FC } from "react";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";
import PanelGrid from "../Components/PanelGrid/PanelGrid";
import Button from "../Components/Button/Button";
import Text from "../Components/Text/Text";
import Icon from "../Components/Icon/Icon";

const Processor: FC = (): JSX.Element => {
  return (
    <Page header="Processor">
      <Panel>
        <PanelHeader icon="&#xEEA1;" header="Intel Core i5-8600KF">
          <Button>
            <Icon>&#xE16F;</Icon>
            <Text>Copy</Text>
          </Button>
        </PanelHeader>
        <PanelContent>
          <PanelGrid
            content={[
              ["Name", "Intel Core i5-8600KF"],
              ["Code name", "Coffee lake"],
              ["Socket", "LGA 1151"],
              ["Technology", "14nm"],
              ["Cores", "6"],
              ["Threads", "6"],
              ["Clock speed", "3.7 GHz"],
              ["Boost speed", "4.6 GHz"],
              [
                "Instructions",
                "MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, EM64T, VT-x, AES, AVX, AVX2, FMA3",
              ],
              ["Architecture", "64bit"],
            ]}
          />
        </PanelContent>
      </Panel>
    </Page>
  );
};

export default Processor;
