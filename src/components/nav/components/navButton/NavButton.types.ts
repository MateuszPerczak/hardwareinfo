import type { IconProps } from "@/components/icon/Icon.types";

export interface NavButtonProps extends IconProps {
  label: string;
  onClick?: () => void;
  selected?: boolean;
}
