import { Suspense } from "react";

import AnimatedOutlet from "../animatedOutlet/AnimatedOutlet";
import Nav from "../nav/Nav";
import Page from "../page/Page";

const Root = (): JSX.Element => {
  return (
    <>
      <main>
        <Nav />
        <Suspense fallback={<Page name="..." content={<></>} />}>
          <AnimatedOutlet />
        </Suspense>
      </main>
    </>
  );
};

export default Root;
