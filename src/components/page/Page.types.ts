import type { ReactNode } from "react";

export type PageProps = {
  name?: string;
  menu?: ReactNode;
  content: ReactNode;
};
