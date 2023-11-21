import { PossibleInputTypes } from 'react-native-paper-dates/lib/typescript/Time/timeUtils';

export type { DatePickerInputProps } from 'react-native-paper-dates/lib/typescript/Date/DatePickerInput.shared';
export type TimePickerProps = {
  locale?: undefined | string;
  label?: string;
  uppercase?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  hours?: number | undefined;
  minutes?: number | undefined;
  visible: boolean | undefined;
  onDismiss: () => any;
  onConfirm: (hoursAndMinutes: { hours: number; minutes: number }) => any;
  animationType?: 'slide' | 'fade' | 'none';
  keyboardIcon?: string;
  clockIcon?: string;
  use24HourClock?: boolean;
  inputFontSize?: number;
  defaultInputType?: PossibleInputTypes;
};
