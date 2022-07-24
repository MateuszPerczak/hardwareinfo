import { FC } from "react";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";
import PanelGrid from "../Components/PanelGrid/PanelGrid";

const Processor: FC = (): JSX.Element => {
  return (
    <Page header="Processor">
      <Panel>
        <PanelHeader icon="&#xEEA1;" header="" />
        <PanelContent>
          <PanelGrid content={[]} />
        </PanelContent>
      </Panel>
    </Page>
  );
};

export default Processor;
