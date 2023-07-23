import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";

const Home = (): JSX.Element => {
  return (
    <Page
      name="Home"
      content={
        <>
          <Panel icon={Icons.Megaphone} label="Hi, welcome to hardwareinfo!">
            {/* <span>
              Hardwareinfo is a system profiling and monitoring application that detects
              the cpu, gpu, ram, motherboard and other devices.
            </span> */}
          </Panel>
          <Panel icon={Icons.Design} label="What's new?">
            {/* <p>This is a alpha release of hardwareinfo...</p>
            <span>So don&apos;t expect ✨shit✨ to work 🙃</span> */}
          </Panel>
        </>
      }
    />
  );
};

export default Home;
