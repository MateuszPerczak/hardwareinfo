import { memo } from "react";

import type { IconProps } from "./Icon.types";

// font-family: "Segoe Fluent Icons";
// size ?? 16

export const Icon = memo(({ icon, size, ...rest }: IconProps): JSX.Element => {
  return (
    <span
      {...rest}
      style={{
        fontFamily: "Segoe Fluent Icons",
        fontSize: size ?? 16,
        ...rest.style,
      }}
    >
      {icon}
    </span>
  );
});

Icon.displayName = "Icon";
