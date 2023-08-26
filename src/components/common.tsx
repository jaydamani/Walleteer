import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, TextProps } from 'react-native';

export function MainText({ style, ...props }: TextProps) {
  const theme = useTheme();
  const newStyle = StyleSheet.compose(
    {
      color: theme.colors.text,
    },
    style,
  );
  return <Text {...props} style={newStyle} />;
}
