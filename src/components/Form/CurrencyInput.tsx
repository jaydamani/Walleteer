import { FieldValues, Path } from 'react-hook-form';
import { formatCurrencyInput } from '@lib/utils';
import { TextInputProps, TextInput } from './TextInput';

export interface CurrencyInputProps<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
> extends TextInputProps<T, K> {}

export function CurrencyInput<
  T extends FieldValues = FieldValues,
  K extends Path<T> = Path<T>,
>({ ...props }: CurrencyInputProps<T, K>) {
  return (
    <TextInput<T, K>
      parse={val =>
        val
          .replaceAll(/[^.-\d]/g, '')
          .replaceAll(/(.+)-/g, '$1')
          .replaceAll(/-$/g, '')
          .replaceAll(/(\..*)\./g, '$1')
          .replaceAll(/(\.\d{2}).+/g, '$1') || '0'
      }
      format={formatCurrencyInput}
      inputMode="numeric"
      {...props}
    />
  );
}
