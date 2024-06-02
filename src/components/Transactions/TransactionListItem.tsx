import { Transaction } from '@database';
import { StyleSheet } from 'react-native';
import { TransactionIcon } from './TransactionIcon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Screens } from '@Navigation/RootNavigator';
import { List, ListItemProps, Text } from 'react-native-paper';
import { ListRenderItemInfo } from '@shopify/flash-list';
import { withObservables } from '@nozbe/watermelondb/react';

function TransactionListItem({ item }: ListRenderItemInfo<Transaction>) {
  const navigation = useNavigation<NavigationProp<Screens>>();
  function onPress() {
    return navigation.navigate('transactionForm', { id: item.id });
  }

  const renderLeft: ListItemProps['left'] = ({ color, style }) => (
    <TransactionIcon item={item} size={40} style={style} color={color} />
  );

  const renderRight: ListItemProps['right'] = ({ style }) => (
    <Text
      // name={item.amount > 0 ? 'plus' : 'minus'}
      style={[style, item.amount > 0 ? styles.positive : styles.negative]}>
      {item.amount >= 0 ? '+' : '-'}
      {Math.abs(item.amount)}
    </Text>
  );
  return (
    <List.Item
      title={item.title}
      description={item.description}
      left={renderLeft}
      right={renderRight}
      onPress={onPress}
    />
  );
}

const enhance = withObservables(
  ['item'],
  ({ item }: ListRenderItemInfo<Transaction>) => {
    return { item };
  },
);

const enhancedTransactionList = enhance(TransactionListItem);
export { enhancedTransactionList as TransactionListItem };

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
