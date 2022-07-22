import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type {
  ElementType,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  PropsWithChildren,
} from "react";

type LinkProps = PropsWithChildren<{
  href: string;
}>;

export type LinkComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  Record<string, unknown>
>;

export default LinkProps;
