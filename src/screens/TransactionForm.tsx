import { Screens } from '@Navigation/RootNavigator';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, ButtonProps, FAB } from 'react-native-paper';
import {
  CurrencyInput,
  DateInput,
  TextInput,
  LoadingScreen,
} from '@Components';
import { Category, db, Transaction } from '@database';
import { CategoryID } from '@lib/constants';
import { ScrollView, StyleSheet, View } from 'react-native';

type Props = NativeStackScreenProps<Screens, 'transactionForm'>;
interface ITransactionForm {
  title: string;
  amount: string;
  date: Date;
  categoryID: Category['id'];
  time: { hours: number; minutes: number };
}

export function getTransactionFormOptions({
  route,
}: Props): NativeStackNavigationOptions {
  return {
    headerTitle: route.params.id
      ? 'Edit Transaction'
      : 'New Transaction',
  };
}

export function TransactionForm({ route, navigation }: Props) {
  const transactionID = route.params.id;
  async function defaultValues(): Promise<ITransactionForm> {
    const d = new Date();
    d.setMonth(Math.random() * 11);
    d.setDate(Math.random() * 28);

    if (!transactionID)
      return {
        title: 'T',
        amount: '0',
        date: d, //new Date(),
        categoryID: CategoryID.TEST,
        time: { hours: 0, minutes: 0 },
      };
    return db.transactions.find(transactionID).then(t => ({
      transactionID,
      title: t.title,
      amount: t.amount.toString(),
      date: t.date,
      categoryID: t.category.id,
      time: { hours: t.date.getHours(), minutes: t.date.getMinutes() },
    }));
  }

  const { control, formState, handleSubmit, setError } =
    useForm<ITransactionForm>({
      defaultValues,
    });

  async function submitData(formData: ITransactionForm) {
    function updateTransaction(t: Transaction) {
      t.title = formData.title;
      t.category.id = formData.categoryID;
      t.amount = +formData.amount;
      formData.date.setHours(formData.time.hours);
      formData.date.setMinutes(formData.time.minutes);
      t.date = formData.date;
    }
    await db.write(async () => {
      if (transactionID) {
        let transaction = await db.transactions.find(transactionID);
        await transaction.update(updateTransaction);
      } else {
        await db.transactions.create(updateTransaction);
      }
    });
    navigation.goBack();
  }

  if (formState.isLoading) return <LoadingScreen />;

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput<ITransactionForm, 'title'>
          style={styles.input}
          control={control}
          label="Title"
          name="title"
          rules={{
            required: 'This is actually required.',
          }}
        />
        <CurrencyInput<ITransactionForm, 'amount'>
          style={styles.input}
          control={control}
          label="Amount"
          name="amount"
          rules={{
            required: 'WTF?',
          }}
        />
        <DateInput<ITransactionForm, 'date'>
          style={styles.input}
          control={control}
          name="date"
          label="Transaction date"
          rules={{ required: true }}
          setError={setError}
        />
        {/* <TimeInput<ITransactionForm, 'time'>
        name="time"
        control={control}
        rules={{ required: true }}
        /> */}
      </ScrollView>
      <Button mode='contained' onPress={handleSubmit(submitData)} style={styles.save} >Save</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
  },
  save: {
    margin: 16
  },
  container: {
    flex: 1,
    margin: 16
  }
});
