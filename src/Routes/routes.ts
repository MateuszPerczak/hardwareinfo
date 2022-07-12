import { FC } from "react";
import Home from "../Pages/Home";

export type Route = {
  id: number;
  header: string;
  icon: string;
  page?: FC;
  position: string;
};

export const routes: Route[] = [
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
    page: Home,
    position: "top",
  },
  {
    id: 3,
    header: "Motherboard",
    icon: "\uE964",
    page: Home,
    position: "top",
  },
  {
    id: 4,
    header: "Memory",
    icon: "\uEEA0",
    page: Home,
    position: "top",
  },
  {
    id: 5,
    header: "Gpu",
    icon: "\uF211",
    page: Home,
    position: "top",
  },
  {
    id: 6,
    header: "Network",
    icon: "\uE839",
    page: Home,
    position: "top",
  },
  {
    id: 7,
    header: "Disks",
    icon: "\uEDA2",
    page: Home,
    position: "top",
  },
  {
    id: 0,
    header: "Settings",
    icon: "\uE115",
    page: Home,
    position: "bottom",
  },
];
