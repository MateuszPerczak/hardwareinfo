import { Icon } from "@/components/index";

import { StyledPanel } from "./Panel.styles";
import type { PanelProps } from "./Panel.types";
import { panelVariants } from "./Panel.animations";

export const Panel = ({
  label,
  description,
  header,
  children,
  ...iconProps
}: PanelProps): JSX.Element => {
  return (
    <StyledPanel variants={panelVariants}>
      <div className="panel-header">
        <div className="panel-header-info">
          <Icon {...iconProps} />
          <div>
            {label && <p>{label}</p>}
            {description && (
              <span className="panel-header-description">{description}</span>
            )}
          </div>
        </div>
        {header && <div className="panel-header-children">{header}</div>}
      </div>
      {children && <div className="panel-children">{children}</div>}
    </StyledPanel>
  );
};
