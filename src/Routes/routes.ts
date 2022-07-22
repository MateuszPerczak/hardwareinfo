import type { FC } from "react";

import Home from "../Pages/Home";
import Settings from "../Pages/Settings";
import Processor from "../Pages/Processor";

export type Route = {
  id: number;
  header: string;
  icon: string;
  page?: FC;
  position: string;
};

export const routes: Route[] = [
  {
    id: 0,
    header: "Settings",
    icon: "\uE115",
    page: Settings,
    position: "bottom",
  },
  {
    id: 1,
    header: "Home",
    icon: "\uE10F",
    page: Home,
    position: "top",
  },
  {
    id: 2,
    header: "Processor",
    icon: "\uEEA1",
    page: Processor,
    position: "top",
  },
  {
    id: 3,
    header: "Motherboard",
    icon: "\uE964",
    position: "top",
  },
  {
    id: 4,
    header: "Memory",
    icon: "\uEEA0",
    position: "top",
  },
  {
    id: 5,
    header: "Gpu",
    icon: "\uF211",
    position: "top",
  },
  {
    id: 6,
    header: "Network",
    icon: "\uE839",
    position: "top",
  },
  {
    id: 7,
    header: "Disks",
    icon: "\uEDA2",
    position: "top",
  },
];
