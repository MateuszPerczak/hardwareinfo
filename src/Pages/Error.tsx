import { FC } from "react";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";

const Error: FC = (): JSX.Element => {
  return (
    <Page header="Oh no ...">
      <Panel>
        <PanelHeader
          icon="&#xEA39;"
          header="We couldn't find the page u were looking for 🤷‍♀️"
        />
      </Panel>
    </Page>
  );
};

export default Error;
