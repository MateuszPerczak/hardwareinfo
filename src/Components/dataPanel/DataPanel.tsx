import { Fragment, useMemo } from "react";

import { dataTypeToFormat } from "./DataPanel.helpers";
import StyledDataPanel from "./DataPanel.styles";
import type { DataPanelProps } from "./DataPanel.types";

const DataPanel = <P,>({
  template,
  data,
  fallbackValue,
  ...rest
}: DataPanelProps<P>): JSX.Element => {
  const filledTemplate = useMemo(
    () =>
      template.reduce<JSX.Element[]>((acc, { key, label, type }, index) => {
        const isDataNotEmpty = Boolean(data[key]);
        if (key in data && (isDataNotEmpty || fallbackValue !== undefined)) {
          acc.push(
            <Fragment key={`label-${index}`}>
              <span>{label}</span>
              <span className="data-value">
                {isDataNotEmpty ? dataTypeToFormat[type](data[key]) : fallbackValue}
              </span>
            </Fragment>,
          );
        }
        return acc;
      }, []),
    [],
  );

  return <StyledDataPanel {...rest}>{filledTemplate}</StyledDataPanel>;
};

export default DataPanel;
