import { Transaction } from '@database';
import { ViewStyle, useWindowDimensions } from 'react-native';
import { Avatar, List, useTheme } from 'react-native-paper';

export const TransactionIcon = ({
  transaction,
  ...props
}: {
  style: ViewStyle;
  transaction: Transaction;
}) => {
  const fontSize = useWindowDimensions().fontScale;
  const theme = useTheme();
  return transaction.icon ? (
    <List.Icon {...props} icon={transaction.icon} />
  ) : (
    <Avatar.Text
      size={40.5 * fontSize}
      color={theme.colors.onPrimary}
      label={transaction.category.id}
    />
  );
};
