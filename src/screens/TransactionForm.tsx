import { Screens } from '@Navigation/RootNavigator';
import { transactions } from '@database';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-ui-lib';
import NotLoaded from './NotLoaded';

type Props = StackScreenProps<Screens, 'transactionForm'>;
export function getTransactionFormOptions({
  navigation,
  route,
}: Props): NativeStackNavigationOptions {
  function headerRight() {
    return <Button onPress={() => navigation.goBack()} label="Save" />;
  }
  return {
    headerRight,
    headerTitle: route.params.transaction
      ? 'Edit Transaction'
      : 'New Transaction',
  };
}

export function TransactionForm({ route }: Props) {
  const transactionId = route.params.transaction;
  let [transaction, setTransaction] = useState<any>(null);
  useEffect(() => {
    if (!transactionId) return setTransaction({});

    transactions.find(transactionId).then(setTransaction);
  }, [transactionId]);

  return transaction ? <></> : <NotLoaded />;
}
