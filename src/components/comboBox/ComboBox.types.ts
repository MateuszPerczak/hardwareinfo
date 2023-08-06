export interface ComboBoxProps<T> {
  options: ComboBoxOption<T>[];
  selectedOption: ComboBoxOption<T>["value"];
  width?: number;
  disabled?: boolean;
  onChange: (option: ComboBoxOption<T>["value"]) => void;
}

export type ComboBoxOption<T> = {
  name: string;
  value: T;
};
