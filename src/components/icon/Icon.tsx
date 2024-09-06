import { memo } from "react";

import type { IconProps } from "./Icon.types";

export const Icon = memo(({ icon, size }: IconProps): JSX.Element => {
  return (
    <span
      style={{
        fontFamily: "Segoe Fluent Icons",
        fontSize: size ?? 16,
      }}
    >
      {icon}
    </span>
  );
});

Icon.displayName = "Icon";
