import Button from "@/components/button/Button";
import { Icons } from "@/components/icon/Icon.types";
import Label from "@/components/label/Label";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import StackPanel from "@/components/stackPanel/StackPanel";
import useApi from "@/hooks/useApi/useApi";

const Processor = (): JSX.Element => {
  const { getCpuInformation } = useApi();

  return (
    <Page
      name="Processor"
      menu={
        <>
          <Button icon={Icons.Refresh} label="Refresh" />
        </>
      }
      content={
        <>
          <Panel
            icon={Icons.Processor}
            label="Intel Core i5-9600KF"
            header={<Button icon={Icons.Copy} label="Copy" disabled />}
          >
            <StackPanel padding={10}>
              <Label description="just a cpu :)" />
            </StackPanel>
          </Panel>
        </>
      }
    />
  );
};

export default Processor;
