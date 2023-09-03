import { Transaction } from '@database';
import {
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';
import { TransactionIcon } from './TransactionIcon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Screens } from '@Navigation/RootNavigator';
import { List, Text } from 'react-native-paper';

export function TransactionListItem({ item }: ListRenderItemInfo<Transaction>) {
  const navigation = useNavigation<NavigationProp<Screens>>();
  function onPress() {
    return navigation.navigate('transactionForm', { transaction: item.id });
  }

  return (
    <List.Item
      title={item.title}
      description={item.description}
      left={({ color, style }) =>
        TransactionIcon({ item, size: 40, style, color })
      }
      right={({ style }) => TransactionListItemRight({ item, style })}
      onPress={onPress}
    />
  );
}

function TransactionListItemRight({
  item,
  style,
}: {
  item: Transaction;
  style: StyleProp<TextStyle>;
}) {
  return (
    <Text
      // name={item.amount > 0 ? 'plus' : 'minus'}
      style={[style, item.amount > 0 ? styles.positive : styles.negative]}>
      {item.amount >= 0 ? '+' : '-'}
      {Math.abs(item.amount)}
    </Text>
  );
}

const styles = StyleSheet.create({
  negative: {
    color: 'red',
  },
  positive: {
    color: 'green',
  },
  header: {
    backgroundColor: 'black',
  },
});
