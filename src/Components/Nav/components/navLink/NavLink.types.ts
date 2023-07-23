import type { IconProps } from "@/components/icon/Icon.types";

export interface NavLinkProps extends IconProps {
  to: string;
  label: string;
}
