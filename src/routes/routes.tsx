import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "@/components/root/Root";
import Home from "@/pages/Home";
import Settings from "@/pages/Settings";

const Processor = lazy(() => import("../pages/Processor"));
const Motherboard = lazy(() => import("../pages/Motherboard"));
const Memory = lazy(() => import("../pages/memory/Memory"));
const Graphics = lazy(() => import("../pages/Graphics"));
const Network = lazy(() => import("../pages/Network"));
const Storage = lazy(() => import("../pages/Storage"));

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
        element: <Graphics />,
        path: "graphics",
      },
      {
        element: <Network />,
        path: "network",
      },
      {
        element: <Storage />,
        path: "storage",
      },
      {
        element: <Settings />,
        path: "settings",
      },
      { path: "*", element: <></> },
    ],
  },
]);
