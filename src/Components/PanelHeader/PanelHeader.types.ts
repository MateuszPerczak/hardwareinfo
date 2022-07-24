import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type {
  ElementType,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

type PanelHeaderProps = PropsWithChildren<{
  icon: string;
  header: string;
}>;

export type PanelHeaderComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  Record<string, unknown>
>;

export default PanelHeaderProps;
