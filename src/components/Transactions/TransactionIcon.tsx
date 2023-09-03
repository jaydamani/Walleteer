import { Transaction } from '@database';
import {
  Avatar,
  AvatarIconProps,
  AvatarImageProps,
  AvatarTextProps,
} from 'react-native-paper';

export type IconProps = Partial<
  AvatarIconProps | AvatarImageProps | AvatarTextProps
> & {
  item: Transaction;
};

export function TransactionIcon({ item, ...props }: IconProps) {
  return item.icon ? (
    <Avatar.Icon {...props} icon={item.icon} />
  ) : (
    // color should be applied only for icons
    <Avatar.Text {...props} color={undefined} label={item.category.id} />
  );
}
