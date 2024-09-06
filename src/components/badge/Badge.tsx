import { Icon } from "@/components/index";

import { StyledBadge } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

export const Badge = ({ label, transition, icon, size }: BadgeProps): JSX.Element => {
  return (
    <StyledBadge transition={transition}>
      <Icon {...{ icon, size: size ?? 12 }} />
      {label && <span>{label}</span>}
    </StyledBadge>
  );
};
