import styled from "@emotion/styled";
import { m } from "framer-motion";

import { typeToBackgroundMapper, typeToColorMapper } from "./InfoBar.mappers";
import type { InfoBarType } from "./InfoBar.types";

export const StyledInfoBar = styled(m.div)<{ type: InfoBarType }>`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme, type }): string => theme[typeToBackgroundMapper[type]]};
  color: ${({ theme: { textPrimary } }): string => textPrimary};
  border: 1px solid ${({ theme: { strokeStrong } }): string => strokeStrong};
  padding: 8px 10px 8px 16px;
  border-radius: 4px;
  min-height: max-content;
  .info-bar-icon {
    display: grid;
    color: ${({ theme, type }): string => theme[typeToColorMapper[type]]};
  }
  .info-bar-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .info-bar-title {
    font-size: 14px;
  }
  .info-bar-description {
    font-size: 12px;
    color: ${({ theme: { textSecondary } }): string => textSecondary};
  }
`;
