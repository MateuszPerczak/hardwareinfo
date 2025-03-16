import { useContext } from "react";

import { ComboBox, Page, Panel } from "@/components";
import { Icons } from "@/components/icon/Icon.types";
import { SettingsContext } from "@/contexts";
import type { Theme } from "@/hooks/useTheme/useTheme.types";

import { themes } from "./Settings.options";

export const Settings = (): JSX.Element => {
  const { setTheme, currentThemeSource } = useContext(SettingsContext);

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
                  selectedOption={currentThemeSource}
                  onChange={(themeSource): void => setTheme(themeSource)}
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
                  disabled
                />
              </>
            }
          />
          <Panel
            icon={Icons.Info}
            label="Hardwareinfo"
            description="© 2025 Mateusz Perczak"
          />
        </>
      }
    />
  );
};
