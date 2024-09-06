import styled from "@emotion/styled";

import type { BadgeProps } from "./Badge.types";

export const StyledBadge = styled.span<Pick<BadgeProps, "transition">>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0 10px;
  height: 35px;
  min-width: 35px;
  border-radius: 4px;
  background-color: ${({ theme: { fill } }): string => fill};
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  border: 1px solid ${({ theme: { stroke } }): string => stroke};
  font-size: 12px;
  animation: ${({ transition }): string =>
    transition ? "badge-show 300ms cubic-bezier(0.2, 0.7, 0, 0.99) forwards" : "none"};
  will-change: opacity, scale;
  @keyframes badge-show {
    from {
      opacity: 0;
      scale: 0.98;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;
