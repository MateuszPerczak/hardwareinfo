import type { useHardware } from "@/hooks";
import { createContext } from "react";

export const HardwareContext = createContext<ReturnType<typeof useHardware>>({} as any);
