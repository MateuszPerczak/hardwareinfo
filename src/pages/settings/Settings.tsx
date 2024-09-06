import { ComboBox, Page, Panel } from "@/components";
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
                />
              </>
            }
          />
          <Panel
            icon={Icons.Info}
            label="Hardwareinfo"
            description="© 2023 Mateusz Perczak"
          />
        </>
      }
    />
  );
};
