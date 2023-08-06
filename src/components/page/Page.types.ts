import type { ReactNode } from "react";

export interface PageProps {
  name?: string;
  menu?: ReactNode;
  content: ReactNode;
}
