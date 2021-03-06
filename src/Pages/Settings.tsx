import { FC } from "react";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";
import PanelText from "../Components/PanelText/PanelText";
import PanelSetting from "../Components/PanelSetting/PanelSetting";
import Link from "../Components/Link/Link";
import Button from "../Components/Button/Button";
import Icon from "../Components/Icon/Icon";
import Text from "../Components/Text/Text";

const Settings: FC = (): JSX.Element => {
  return (
    <Page header="Settings">
      <Panel>
        <PanelHeader icon="&#xE790;" header="Apperance" />
        <PanelContent></PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xE12A;" header="App" />
        <PanelContent>
          <PanelSetting></PanelSetting>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xEA86;" header="Addons" />
        <PanelContent></PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xE167;" header="Useful links" />
        <PanelContent>
          <Link href="https://github.com/MateuszPerczak">Github</Link>
          <Link href="https://mateuszperczak.github.io/">My website</Link>
          <Link href="https://github.com/MateuszPerczak/hardwareinfo">
            Github - Hardwareinfo
          </Link>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xE946;" header="About" />
        <PanelContent>
          <PanelText header="Hardwareinfo">
            <span>Version: 0.0.0.1</span>
          </PanelText>
          <PanelText header="Used libraries (Frontend)">
            <span>React, Emotion, Framer-motion, Fluent UI Icons</span>
          </PanelText>
          <PanelText header="Used libraries (Backend)">
            <span>Tauri</span>
          </PanelText>
          <PanelText header="Authors">
            <span>Mateusz Perczak</span>
          </PanelText>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader icon="&#xEB95;" header="Licence" />
        <PanelContent>
          <PanelText header="GNU General Public License v3.0" />
        </PanelContent>
      </Panel>
    </Page>
  );
};

export default Settings;
