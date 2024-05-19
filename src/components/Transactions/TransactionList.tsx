import { Transaction, db } from '@database';
import { Q } from '@nozbe/watermelondb';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import { withObservables } from '@nozbe/watermelondb/react';
import { TransactionListItem } from './TransactionListItem';
import { List } from 'react-native-paper';

type GroupedTransactionListItem = string | Transaction;
export interface TransactionListProps
  extends Omit<FlashListProps<GroupedTransactionListItem>, 'data'> {
  queries: Q.Clause[];
}
export interface EnhancedTransactionListProps extends TransactionListProps {
  data: Transaction[];
  // count: number;
}

function TransactionList(listProps: EnhancedTransactionListProps) {
  const data: GroupedTransactionListItem[] = [];
  let lastTitle: string = '';
  for (const t of listProps.data) {
    let title = t.date.toLocaleDateString('default', {
      month: 'short',
      year: 'numeric',
    });
    if (lastTitle !== title) {
      data.push(title);
      lastTitle = title;
    }
    data.push(t);
  }
  return (
    <FlashList
      {...listProps}
      data={data}
      // stickySectionHeadersEnabled
      renderItem={({ item, ...props }) => {
        return typeof item === 'string' ? (
          <List.Subheader>{item}</List.Subheader>
        ) : (
          <TransactionListItem item={item} {...props} />
        );
      }}
      estimatedItemSize={68}
      // getItemType={item => {
      //   // To achieve better performance, specify the type based on the item
      //   return typeof item === 'string' ? 'sectionHeader' : 'row';
      // }}
    />
  );
}

const enhance = withObservables(
  ['queries'],
  ({ queries }: TransactionListProps) => {
    queries.push(Q.sortBy('done_at', Q.desc));
    const data = db.transactions.query(...queries);
    return { data };
  },
);

const enhancedTransactionList = enhance(TransactionList);
export { enhancedTransactionList as TransactionList };
