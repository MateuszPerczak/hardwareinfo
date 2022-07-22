import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type TextComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;

export default TextComponent;
