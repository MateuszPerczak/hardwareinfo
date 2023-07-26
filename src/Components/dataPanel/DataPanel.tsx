import { Fragment } from "react";

import StyledDataPanel from "./DataPanel.styles";
import type { DataPanelProps, DataType } from "./DataPanel.types";

const DataPanel = <P,>({
  template,
  data,
  fallbackValue,
  ...rest
}: DataPanelProps<P>): JSX.Element => {
  const formatValue = (value: P[keyof P], type: DataType): string => {
    if (value === undefined || value === null) {
      return fallbackValue ?? "N/A";
    }
    value;

    const typeToFormat: Record<DataType, () => string> = {
      string: () => `${value}`,
      volt: () => `${value} V`,
      bytes: () => `${value} B`,
      megahertz: () => `${value} MHz`,
      gigahertz: () => `${value} GHz`,
    };

    return typeToFormat[type]();
  };

  return (
    <StyledDataPanel {...rest}>
      {template.map(({ key, label, type }, index) => {
        return (
          <Fragment key={`label-${index}`}>
            <span>{label}</span>
            <span className="data-value">{formatValue(data[key], type)}</span>
          </Fragment>
        );
      })}
    </StyledDataPanel>
  );
};

export default DataPanel;
