import { useContext } from "react";

import { Button, Label, Page, Panel, StackPanel } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { HardwareContext } from "@/contexts";

export const Home = (): JSX.Element => {
  const { isLoading, getHardware } = useContext(HardwareContext);

  return (
    <Page
      name="Home"
      menu={
        <Button
          icon={Icons.Refresh}
          label="Refresh all"
          disabled={isLoading}
          onClick={getHardware}
        />
      }
      content={
        <>
          <Panel icon={Icons.Megaphone} label="Hi, welcome to hardwareinfo!">
            <StackPanel padding={10}>
              <Label
                label="So, what exactly this app do?"
                description="HardwareInfo is the ultimate Windows app that spills all the tea on your PC's components, making sure there's absolutely no mystery left about what’s lurking inside your hardware! 🕵️‍♂️💻"
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
