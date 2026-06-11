export interface RadioOption<RadioOptionValue extends string = string> {
  value: RadioOptionValue;
  label: string;
}

export interface CTRadioGroupProps<RadioOptionValue extends string = string> {
  options: RadioOption<RadioOptionValue>[];
  defaultValue?: RadioOptionValue;
  onValueChange?: (value: RadioOptionValue) => void;
  className?: string;
}
