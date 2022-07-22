import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type ButtonComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export default ButtonComponent;
