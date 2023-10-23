import {
  HelperText,
  TextInput as RNPTextInput,
  TextInputProps as RNPTextInputProps,
} from 'react-native-paper';
import {
  ControllerProps,
  Controller,
  FieldValues,
  Path,
} from 'react-hook-form';

export type BaseInputProps<
  T extends FieldValues,
  K extends Path<T>,
  M,
> = RNPTextInputProps &
  Omit<ControllerProps<T, K>, 'render'> & {
    parse?: (value: string) => M;
    format?: (value: M) => string;
  };
export function TextInput<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
  M = string,
>({
  parse = a => a as M,
  format = a => a as string,
  ...props
}: BaseInputProps<T, K, M>) {
  return (
    <Controller
      {...props}
      render={({ field: { onChange, value, ...field }, fieldState }) => (
        <>
          <RNPTextInput
            onChangeText={val => onChange(parse(val))}
            value={format(value)}
            {...field}
            {...props}
          />
          <HelperText type="error" visible={fieldState.invalid}>
            {fieldState.error?.message || 'This field is incorrect!'}
          </HelperText>
        </>
      )}
    />
  );
}

export interface NumberInputProps<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
  M extends number = number,
> extends BaseInputProps<T, K, M> {}

export function CurrencyInput<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
  M extends number = number,
>({ ...props }: NumberInputProps<T, K, M>) {
  return (
    <TextInput<T, K, M>
      parse={val =>
        (+val.replaceAll(/[^-\d]/g, '').replaceAll(/([^-]+)-/g, '$1') /
          100) as M
      }
      keyboardType="decimal-pad"
      {...props}
    />
  );
}

export const TextInputAffix = RNPTextInput.Affix;
export const TextInputIcon = RNPTextInput.Icon;
