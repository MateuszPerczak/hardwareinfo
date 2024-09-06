import type { Page } from "@/components/pageRenderer/PageRenderer.types";
import {
  Home,
  Memory,
  Processor,
  Settings,
  Storage,
  Graphics,
  Motherboard,
  Network,
  Usb,
} from "@/pages/index";

export type Pages =
  | "home"
  | "processor"
  | "memory"
  | "settings"
  | "graphics"
  | "storage"
  | "motherboard"
  | "network"
  | "usb";

export const pages: Record<Pages, Page<Pages>> = {
  home: Home,
  processor: Processor,
  memory: Memory,
  settings: Settings,
  graphics: Graphics,
  storage: Storage,
  motherboard: Motherboard,
  network: Network,
  usb: Usb,
};
