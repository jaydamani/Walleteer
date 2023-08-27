import { Transaction, transactions } from '@database';
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';
import {
  SectionList,
  StyleSheet,
  ListRenderItemInfo,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';

import { TransactionIcon } from './TransactionIcon';
import { ListItem, Text } from 'react-native-ui-lib';

export interface TransactionListProps {
  transactionList: readonly Transaction[];
}

function TransactionList({ transactionList }: TransactionListProps) {
  const sections: { data: Transaction[]; title: string }[] = [];
  if (transactionList.length) {
    let lastTitle;
    for (const t of transactionList) {
      const title = t.date.toLocaleString('default', {
        month: 'short',
        year: 'numeric',
      });
      if (title !== lastTitle) {
        sections.push({ title, data: [] });
        lastTitle = title;
      }
      sections[sections.length - 1].data.push(t);
    }
  }

  return (
    <SectionList
      sections={sections}
      // stickySectionHeadersEnabled
      keyExtractor={t => t.id}
      renderSectionHeader={({ section }) => (
        <Text style={styles.listItem}>{section.title}</Text>
      )}
      renderItem={renderTransactionListItem}
      getItemLayout={(_, index) => ({
        index,
        length: Dimensions.get('screen').width,
        offset: 72 * index,
      })}
    />
  );
}

export function renderTransactionListItem({
  item,
}: ListRenderItemInfo<Transaction>) {
  function onPress() {
    return console.log('Form SoonTM');
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

const enhance = withObservables([], () => {
  console.log('queried');
  return {
    transactionList: transactions.query(Q.sortBy('done_at', Q.desc)),
  };
});

const enhancedTransactionList = enhance(TransactionList);
export { enhancedTransactionList as TransactionList };

export const styles = StyleSheet.create({
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
