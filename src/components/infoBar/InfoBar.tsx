import { Icon } from "../icon/Icon";
import { infoBarVariants } from "./InfoBar.animations";
import { typeToIconMapper } from "./InfoBar.mappers";
import { StyledInfoBar } from "./InfoBar.styles";
import type { InfoBarProps } from "./InfoBar.types";

export const InfoBar = ({ type, title, description }: InfoBarProps): JSX.Element => {
  return (
    <StyledInfoBar variants={infoBarVariants} type={type}>
      <div className="info-bar-icon">
        <Icon icon={typeToIconMapper[type]} />
      </div>
      <div className="info-bar-body">
        {title && <span className="info-bar-title">{title}</span>}
        {description && <span className="info-bar-description">{description}</span>}
      </div>
    </StyledInfoBar>
  );
};
