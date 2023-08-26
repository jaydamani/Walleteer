import { Transaction, transactions } from '@database';
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';
import {
  SectionList,
  StyleSheet,
  ListRenderItemInfo,
  View,
} from 'react-native';
import { Text, List } from 'react-native-paper';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';

import { TransactionIcon } from './TransactionIcon';

export interface TransactionListProps {
  transactions: readonly Transaction[];
}

function TransactionList({ transactions }: TransactionListProps) {
  const sections: { data: Transaction[]; title: string }[] = [];
  if (transactions.length) {
    let lastTitle;
    for (const t of transactions) {
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
    <View style={styles.container}>
      <SectionList
        sections={sections}
        // stickySectionHeadersEnabled
        keyExtractor={t => t.id}
        renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
        renderItem={renderTransactionListItem}
        getItemLayout={(_, index) => ({
          index,
          length: 360,
          offset: 69 * index,
        })}
      />
    </View>
  );
}

export function renderTransactionListItem({
  item,
}: ListRenderItemInfo<Transaction>) {
  function onPress() {
    return console.log('Form SoonTM');
  }

  return (
    <List.Item
      title={item.title}
      left={props => <TransactionIcon {...props} transaction={item} />}
      right={() => (
        <Feather
          style={[
            styles.rightAlign,
            item.amount > 0 ? styles.positiveAmount : styles.negativeAmount,
          ]}
          name="plus">
          {Math.abs(item.amount)}
        </Feather>
      )}
      description={item.description}
      onPress={onPress}
    />
  );
}

const enhance = withObservables([], () => {
  console.log('queried');
  return {
    transactions: transactions.query(Q.sortBy('done_at', Q.desc)),
  };
});

const enhancedTransactionList = enhance(TransactionList);
export { enhancedTransactionList as TransactionList };

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
  rightAlign: {
    textAlign: 'right',
  },
  negativeAmount: {
    color: 'red',
  },
  positiveAmount: {
    color: 'green',
  },
  header: {
    backgroundColor: 'black',
  },
});
