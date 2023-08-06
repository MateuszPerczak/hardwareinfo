import type { ButtonHTMLAttributes } from "react";

import type { IconProps } from "../icon/Icon.types";

export type ButtonProps = {
  label?: string;
  disabled?: boolean;
} & IconProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
