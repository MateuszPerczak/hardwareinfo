import type { Page } from "@/components/pageRenderer/PageRenderer.types";

import Home from "./home/Home";
import Memory from "./memory/Memory";
import Processor from "./processor/Processor";
import Settings from "./settings/Settings";

export type Pages = "home" | "processor" | "memory" | "settings";

export const pages: Record<Pages, Page<Pages>> = {
  home: Home,
  processor: Processor,
  memory: Memory,
  settings: Settings,
};
