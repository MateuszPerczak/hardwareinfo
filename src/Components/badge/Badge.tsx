import Icon from "../icon/Icon";
import StyledBadge from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

const Badge = ({ label, transition, ...rest }: BadgeProps): JSX.Element => {
  return (
    <StyledBadge transition={transition}>
      <Icon size={12} {...rest} />
      {label && <span>{label}</span>}
    </StyledBadge>
  );
};

export default Badge;
