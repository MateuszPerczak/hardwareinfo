import { FC } from "react";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import Icon from "../Components/Icon/Icon";

const Settings: FC = (): JSX.Element => {
  return (
    <Page header="Settings">
      <Panel>
        <span>About hardwareinfo</span>
        <Icon>&#xE006;</Icon>
      </Panel>
    </Page>
  );
};

export default Settings;
