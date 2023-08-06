import styled from "@emotion/styled";

import type { IconProps } from "./Icon.types";

const StyledIcon = styled.span<Pick<IconProps, "size">>`
  font-family: "Segoe Fluent Icons";
  font-size: ${({ size }): string => `${size ?? 16}px`};
`;

export default StyledIcon;
