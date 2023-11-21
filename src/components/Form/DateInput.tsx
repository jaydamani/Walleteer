import { HelperText } from 'react-native-paper';
import {
  FieldValues,
  Path,
  useController,
  UseControllerProps,
  UseFormReturn,
} from 'react-hook-form';
import { DatePickerInput } from 'react-native-paper-dates';
import { DatePickerInputProps } from '@lib/types';

export type DateInputProps<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
> = UseControllerProps<T, K> &
  Partial<DatePickerInputProps> & {
    setError: UseFormReturn<T, K>['setError'];
  };

export function DateInput<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
>({ setError, ...props }: DateInputProps<T, K>) {
  const { field, fieldState } = useController(props);
  return (
    <>
      <DatePickerInput
        inputMode="start"
        locale="en"
        onValidationError={message =>
          message && setError(props.name, { message })
        }
        hideValidationErrors
        {...field}
        {...props}
      />
      {fieldState.invalid && (
        <HelperText type="error">
          {fieldState.error?.message || 'This field is incorrect!'}
        </HelperText>
      )}
    </>
  );
}
