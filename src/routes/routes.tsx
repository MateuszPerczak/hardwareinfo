import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "@/components/root/Root";

const Settings = lazy(() => import("../pages/Settings"));
const Processor = lazy(() => import("../pages/Processor"));
const Memory = lazy(() => import("../pages/Memory"));
const Motherboard = lazy(() => import("../pages/Motherboard"));
const Home = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Processor />,
        path: "processor",
      },
      {
        element: <Motherboard />,
        path: "motherboard",
      },
      {
        element: <Memory />,
        path: "memory",
      },
      {
        element: <Settings />,
        path: "settings",
      },
      { path: "*", element: <></> },
    ],
  },
]);
