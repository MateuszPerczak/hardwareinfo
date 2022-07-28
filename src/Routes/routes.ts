export type Route = {
  header: string;
  icon: string;
  position: string;
};

export const routes: Route[] = [
  {
    header: "Settings",
    icon: "\uE115",
    position: "bottom",
  },
  {
    header: "Home",
    icon: "\uE10F",
    position: "top",
  },
  {
    header: "Processor",
    icon: "\uEEA1",
    position: "top",
  },
  {
    header: "Motherboard",
    icon: "\uE964",
    position: "top",
  },
  {
    header: "Memory",
    icon: "\uEEA0",
    position: "top",
  },
  {
    header: "Graphics",
    icon: "\uF211",
    position: "top",
  },
  {
    header: "Network",
    icon: "\uE839",
    position: "top",
  },
  {
    header: "Storage",
    icon: "\uEDA2",
    position: "top",
  },
];
