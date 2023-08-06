import Icon from "../icon/Icon";
import StyledPanel from "./Panel.styles";
import type { PanelProps } from "./Panel.types";

const Panel = ({
  label,
  description,
  header,
  children,
  ...rest
}: PanelProps): JSX.Element => {
  return (
    <StyledPanel>
      <div className="panel-header">
        <div className="panel-header-info">
          <Icon {...rest} />
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

export default Panel;
