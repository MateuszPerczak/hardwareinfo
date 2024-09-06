import type { IconProps } from "@/components/icon/Icon.types";

export type NavButtonProps = {
  label: string;
  onClick?: () => void;
  selected?: boolean;
} & IconProps;
