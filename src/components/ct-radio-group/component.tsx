import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';

import styles from './style.module.css';
import { CTRadioGroupProps } from './type';

export function CTRadioGroup<RadioOptionValue extends string = string>({
  options,
  defaultValue,
  onValueChange,
  className,
}: CTRadioGroupProps<RadioOptionValue>) {
  return (
    <RadioGroupPrimitive.Root
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className={cn('flex flex-col gap-2.5', className)}>
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className={cn(styles.label)}>
          <RadioGroupPrimitive.Item
            id={option.value}
            value={option.value}
            className={styles.radio}>
            <RadioGroupPrimitive.Indicator className={styles.indicator} />
          </RadioGroupPrimitive.Item>

          <p className={styles.text}>{option.label}</p>
        </label>
      ))}
    </RadioGroupPrimitive.Root>
  );
}
