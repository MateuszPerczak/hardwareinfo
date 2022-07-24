import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type {
  DetailedHTMLProps,
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

type ComboBoxProps = PropsWithChildren<{
  header: string;
}>;

export type ComboBoxComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export default ComboBoxProps;
