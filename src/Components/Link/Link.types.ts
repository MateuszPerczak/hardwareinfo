import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type {
  ElementType,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
} from "react";

type LinkComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  Record<string, unknown>
>;

export default LinkComponent;
