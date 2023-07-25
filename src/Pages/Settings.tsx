import Button from "@/components/button/Button";
import { Icons } from "@/components/icon/Icon.types";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";

const Settings = (): JSX.Element => {
  return (
    <Page
      name="Settings"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Check for updates" disabled />
        </>
      }
      content={
        <>
          <Panel icon={Icons.Color} label="Theme" description="Choose app appearance" />
        </>
      }
    />
  );
};

export default Settings;
