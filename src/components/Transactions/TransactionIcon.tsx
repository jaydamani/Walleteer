import { Transaction } from '@database';
import { Avatar, AvatarProps } from 'react-native-ui-lib';

export const TransactionIcon = ({
  transaction,
  ...props
}: {
  transaction: Transaction;
} & AvatarProps) => {
  return <Avatar {...props} label={transaction.category.id} />;
};
