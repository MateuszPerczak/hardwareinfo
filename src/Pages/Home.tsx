import { FC } from "react";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";
import PanelText from "../Components/PanelText/PanelText";
import Icon from "../Components/Icon/Icon";
import Text from "../Components/Text/Text";

const Home: FC = (): JSX.Element => {
  return (
    <Page header="Home">
      <Panel>
        <PanelHeader icon="&#xEB3C;" header="What's new?" />
        <PanelContent>
          <PanelText header="This is a alpha release of hardwareinfo...">
            <span>So don't expect shit to work 🥺</span>
          </PanelText>
        </PanelContent>
      </Panel>
    </Page>
  );
};

export default Home;
