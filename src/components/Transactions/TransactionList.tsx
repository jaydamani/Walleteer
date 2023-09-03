import { Transaction, transactions } from '@database';
import { Q } from '@nozbe/watermelondb';
import { SectionList, Dimensions } from 'react-native';

import { Text } from 'react-native-ui-lib';
import { useEffect, useState } from 'react';
import { TransactionListItem } from './TransactionListItem';

export interface TransactionListProps {
  queries?: Q.Clause[];
}

interface GroupedTransactionListItem {
  title: string;
  data: Transaction[];
}

export function TransactionList({ queries = [] }: TransactionListProps) {
  const [list, setList] = useState<GroupedTransactionListItem[]>([]);
  useEffect(() => {
    transactions
      .query(Q.sortBy('done_at', Q.desc), ...queries)
      .fetch()
      .then(ungroupedList => {
        const sections: GroupedTransactionListItem[] = [];
        let lastTitle;
        for (const t of ungroupedList) {
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
        return sections;
      })
      .then(setList);
  }, [queries]);

  return (
    <SectionList
      sections={list}
      // stickySectionHeadersEnabled
      keyExtractor={t => t.id}
      renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
      renderItem={TransactionListItem}
      getItemLayout={(_, index) => ({
        index,
        length: Dimensions.get('screen').width,
        offset: 72 * index,
      })}
    />
  );
}
