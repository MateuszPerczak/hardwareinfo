export type Route = {
  id: number;
  header: string;
  icon: string;
  page?: string;
  position: string;
};

export const routes: Route[] = [
  {
    id: 1,
    header: "Home",
    icon: "\uE10F",
    page: "Home",
    position: "top",
  },
  {
    id: 2,
    header: "Processor",
    icon: "\uEEA1",
    page: "Processor",
    position: "top",
  },
  {
    id: 3,
    header: "Motherboard",
    icon: "\uE964",
    page: "Motherboard",
    position: "top",
  },
  {
    id: 4,
    header: "Memory",
    icon: "\uEEA0",
    page: "Memory",
    position: "top",
  },
  {
    id: 5,
    header: "Gpu",
    icon: "\uF211",
    page: "Gpu",
    position: "top",
  },
  {
    id: 6,
    header: "Network",
    icon: "\uE839",
    page: "Network",
    position: "top",
  },
  {
    id: 7,
    header: "Disks",
    icon: "\uEDA2",
    page: "Disks",
    position: "top",
  },
  {
    id: 0,
    header: "Settings",
    icon: "\uE115",
    page: "Settings",
    position: "bottom",
  },
];
