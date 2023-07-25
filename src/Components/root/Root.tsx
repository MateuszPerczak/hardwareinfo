import { Suspense } from "react";

import AnimatedOutlet from "../animatedOutlet/AnimatedOutlet";
import Nav from "../nav/Nav";

const Root = (): JSX.Element => {
  return (
    <>
      <main>
        <Nav />
        <Suspense fallback={<></>}>
          <AnimatedOutlet />
        </Suspense>
      </main>
    </>
  );
};

export default Root;
