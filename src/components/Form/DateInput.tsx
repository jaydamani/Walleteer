import { HelperText, TextInput } from 'react-native-paper';
import {
  FieldValues,
  Path,
  useController,
  UseControllerProps,
  UseFormReturn,
} from 'react-hook-form';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Keyboard } from 'react-native';

export type DateInputProps<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
> = UseControllerProps<T, K> &
  Partial<any> & {
    setError: UseFormReturn<T, K>['setError'];
  };

export function DateInput<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
>({ ...props }: DateInputProps<T, K>) {
  const {
    field: { onChange, value, ...field },
    fieldState,
  } = useController(props);
  const [open, setOpen] = useState(false);
  if (open) Keyboard.dismiss();
  return (
    <>
      <TextInput
        right={
          <TextInput.Icon
            onPress={() => {
              setOpen(true);
            }}
            icon="calendar"
          />
        }
        mode="outlined"
        {...props}
        {...field}
        value={value.toLocaleDateString('default', {
          month: '2-digit',
          year: '2-digit',
          day: '2-digit',
        })}
      />
      {open && (
        <DateTimePicker
          value={value}
          mode="date"
          onChange={(_, date) => {
            setOpen(false);
            if (!date) return;
            onChange(date);
          }}
        />
      )}
      {fieldState.invalid && (
        <HelperText type="error">
          {fieldState.error?.message || 'This field is incorrect!'}
        </HelperText>
      )}
    </>
  );
}
