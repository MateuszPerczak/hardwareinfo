import { Icons } from "@/components/icon/Icon.types";
import Label from "@/components/label/Label";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import StackPanel from "@/components/stackPanel/StackPanel";

const Home = (): JSX.Element => {
  return (
    <Page
      name="Home"
      content={
        <>
          <Panel icon={Icons.Megaphone} label="Hi, welcome to hardwareinfo!">
            <StackPanel padding={10}>
              <Label
                label="What is hardwareinfo?"
                description="Hardwareinfo is a system profiling and monitoring application that detects
              the cpu, gpu, ram, motherboard and other devices."
              />
            </StackPanel>
          </Panel>
          <Panel icon={Icons.Design} label="What's new?">
            <StackPanel padding={10}>
              <Label
                label="This is a alpha version of hardwareinfo..."
                description="So don't expect ✨shit✨ to work correctly 🙃"
              />
            </StackPanel>
          </Panel>
        </>
      }
    />
  );
};

export default Home;
