import type { PropsWithChildren, ReactNode } from "react";

import type { IconProps } from "../icon/Icon.types";

export type PanelProps = PropsWithChildren<
  {
    label?: string;
    description?: string;
    header?: ReactNode;
  } & IconProps
>;
