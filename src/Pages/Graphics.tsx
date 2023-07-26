//@ts-expect-error it exist
import { use } from "react";

import Page from "@/components/page/Page";
import useApi from "@/hooks/useApi/useApi";

const Graphics = (): JSX.Element => {
  const { getGraphicsInformation, showDevTools } = useApi();

  showDevTools();
  const data = use(getGraphicsInformation());

  console.log(data);

  return <Page name="Graphics" content={<></>} />;
};

export default Graphics;
