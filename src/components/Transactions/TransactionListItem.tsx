import { Transaction } from '@database';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import { TransactionIcon } from './TransactionIcon';
import { ListItem, Text } from 'react-native-ui-lib';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Screens } from '@Navigation/RootNavigator';

export function TransactionListItem({ item }: ListRenderItemInfo<Transaction>) {
  const navigation = useNavigation<NavigationProp<Screens>>();
  function onPress() {
    return navigation.navigate('transactionForm', { transaction: item.id });
  }

  return (
    <ListItem onPress={onPress}>
      <ListItem.Part left containerStyle={styles.listItem}>
        <TransactionIcon size={40} transaction={item} />
      </ListItem.Part>
      <ListItem.Part middle column containerStyle={styles.listItem}>
        <Text primary>{item.title}</Text>
        <Text secondary>{item.description}</Text>
      </ListItem.Part>
      <ListItem.Part
        right
        containerStyle={(styles.listItem, { marginRight: 24 })}>
        <Feather
          style={[item.amount > 0 ? styles.positive : styles.negative]}
          name={item.amount > 0 ? 'plus' : 'minus'}>
          {Math.abs(item.amount)}
        </Feather>
      </ListItem.Part>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  rightAlign: {
    textAlign: 'right',
  },
  negative: {
    color: 'red',
  },
  positive: {
    color: 'green',
  },
  header: {
    backgroundColor: 'black',
  },
  listItem: {
    marginLeft: 16,
  },
});
