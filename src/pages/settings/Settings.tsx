import { ComboBox, Label, Page, Panel, StackPanel } from "@/components";
import { Icons } from "@/components/icon/Icon.types";

import { themes } from "./Settings.options";
import type { Theme } from "./Settings.types";

export const Settings = (): JSX.Element => {
  return (
    <Page
      name="Settings"
      content={
        <>
          <Panel
            icon={Icons.Color}
            label="Theme"
            description="Choose app appearance"
            header={
              <>
                <ComboBox<Theme>
                  options={themes}
                  selectedOption={"system"}
                  onChange={(): void => undefined}
                  width={150}
                />
              </>
            }
          />
          <Panel
            icon={Icons.Language}
            label="Language"
            description="Choose app language"
            header={
              <>
                <ComboBox<"en">
                  options={[{ name: "English", value: "en" }]}
                  selectedOption={"en"}
                  onChange={(): void => undefined}
                  width={150}
                />
              </>
            }
          />
          <Panel
            icon={Icons.Info}
            label="Hardwareinfo"
            description="© 2023 Mateusz Perczak"
          >
            {/* <StackPanel flex="1" gap={10} padding={10}>
              <Label label="Made with ❤️ by Me" />
            </StackPanel> */}
          </Panel>
        </>
      }
    />
  );
};
