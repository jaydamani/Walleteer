import { Screens } from '@Navigation/RootNavigator';
import { transactions } from '@database';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import LoadingScreen from './LoadingScreen';

type Props = NativeStackScreenProps<Screens, 'transactionForm'>;
export function getTransactionFormOptions({
  route,
}: Props): NativeStackNavigationOptions {
  return {
    headerRight: () => HeaderRight({}),
    headerTitle: route.params.transaction
      ? 'Edit Transaction'
      : 'New Transaction',
  };
}

function HeaderRight({ onPress }: { onPress?: () => void }) {
  return (
    <Button onPress={onPress} mode="elevated">
      Save
    </Button>
  );
}

export function TransactionForm({ route, navigation }: Props) {
  const transactionId = route.params.transaction;
  let [transaction, setTransaction] = useState<any>(null);
  function onPress() {}
  useEffect(
    () =>
      navigation.setOptions({
        headerRight: () => HeaderRight({ onPress }),
      }),
    [navigation],
  );
  useEffect(() => {
    if (!transactionId) return setTransaction({});

    transactions.find(transactionId).then(setTransaction);
  }, [transactionId]);

  return transaction ? <></> : <LoadingScreen />;
}
