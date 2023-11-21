import {
  HelperText,
  TextInput as RNPTextInput,
  TextInputProps as RNPTextInputProps,
} from 'react-native-paper';
import {
  FieldValues,
  Path,
  useController,
  UseControllerProps,
} from 'react-hook-form';

export type TextInputProps<
  T extends FieldValues,
  K extends Path<T>,
> = RNPTextInputProps &
  UseControllerProps<T, K> & {
    parse?: (value: string) => string;
    format?: (value: string) => string;
  };

export function TextInput<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
>({ parse = a => a, format = a => a, ...props }: TextInputProps<T, K>) {
  const {
    field: { onChange, value, ...field },
    fieldState,
  } = useController(props);
  return (
    <>
      <RNPTextInput
        onChangeText={val => onChange(parse(val))}
        value={format(value)}
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
