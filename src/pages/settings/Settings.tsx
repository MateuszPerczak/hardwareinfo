import ComboBox from "@/components/comboBox/ComboBox";
import type { ComboBoxOption } from "@/components/comboBox/ComboBox.types";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";

type Theme = 'dark' | 'light' | 'system';

const Settings = (): JSX.Element => {

  const themes: ComboBoxOption<Theme>[] = [
    {
      name: 'Dark',
      value: 'dark',
    },
    {
      name: 'Light',
      value: 'light',
    },
    {
      name: 'System',
      value:'system',
    },
  ];

  return (
    <Page
      name="Settings"
      content={
        <>
          <Panel icon={Icons.Color} label="Theme" description="Choose app appearance" header={<>
          <ComboBox<Theme> options={themes} selectedOption={'system'} onChange={(): void => undefined} disabled/>
          </>
        } />
         <Panel icon={Icons.Info} label="Hardwareinfo" description="© 2023 Mateusz Perczak" />
        </>
      }
    />
  );
};

export default Settings;
