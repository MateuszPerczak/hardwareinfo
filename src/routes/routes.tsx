import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "@/components/root/Root";
import Home from "@/pages/home/Home";
import Settings from "@/pages/settings/Settings";

const Processor = lazy(() => import("../pages/processor/Processor"));
const Motherboard = lazy(() => import("../pages/motherboard/Motherboard"));
const Memory = lazy(() => import("../pages/memory/Memory"));
const Graphics = lazy(() => import("../pages/graphics/Graphics"));
const Network = lazy(() => import("../pages/network/Network"));
const Storage = lazy(() => import("../pages/storage/Storage"));

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
