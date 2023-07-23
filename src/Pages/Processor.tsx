import Button from "@/components/button/Button";
import Icon from "@/components/icon/Icon";
import { Icons } from "@/components/icon/Icon.types";
import Label from "@/components/label/Label";
import Page from "@/components/page/Page";
import Panel from "@/components/panel/Panel";
import StackPanel from "@/components/stackPanel/StackPanel";

const Processor = (): JSX.Element => {
  return (
    <Page
      name="Processor"
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
