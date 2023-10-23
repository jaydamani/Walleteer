import { Screens } from '@Navigation/RootNavigator';
import { Category, database, Transaction, transactions } from '@database';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, ButtonProps } from 'react-native-paper';
import LoadingScreen from './LoadingScreen';
import { View } from 'react-native';
import { CurrencyInput, TextInput } from '@Components';
import { CategoryID } from '@lib/constants';

type Props = NativeStackScreenProps<Screens, 'transactionForm'>;
interface ITransactionForm {
  title: string;
  amount: number;
  date: Date;
  categoryID: Category['id'];
}

export function getTransactionFormOptions({
  route,
}: Props): NativeStackNavigationOptions {
  return {
    headerRight: () => HeaderRight({ disabled: true }),
    headerTitle: route.params.transaction
      ? 'Edit Transaction'
      : 'New Transaction',
  };
}

function HeaderRight(props: Omit<ButtonProps, 'children'>) {
  return (
    <Button elevation={2} {...props} mode="elevated">
      Save
    </Button>
  );
}

export function TransactionForm({ route, navigation }: Props) {
  const transactionID = route.params.transaction;
  async function defaultValues(): Promise<ITransactionForm> {
    const d = new Date();
    d.setMonth(Math.random() * 11);
    d.setDate(Math.random() * 28);

    if (!transactionID)
      return {
        title: 'T',
        amount: 0,
        date: d, //new Date(),
        categoryID: CategoryID.TEST,
      };
    return transactions.find(transactionID).then(t => ({
      transactionID,
      title: t.title,
      amount: t.amount,
      date: t.date,
      categoryID: t.category.id,
    }));
  }

  const { control, formState, handleSubmit } = useForm<ITransactionForm>({
    defaultValues,
  });

  useEffect(() => {
    async function submitData(formData: ITransactionForm) {
      function updateTransaction(t: Transaction) {
        t.title = formData.title;
        t.category.id = formData.categoryID;
        t.amount = formData.amount;
        t.date = formData.date;
      }
      await database.write(async () => {
        if (transactionID) {
          let transaction = await transactions.find(transactionID);
          await transaction.update(updateTransaction);
        } else {
          await transactions.create(updateTransaction);
        }
      });
      navigation.goBack();
    }
    navigation.setOptions({
      headerRight: () =>
        HeaderRight({
          onPress: handleSubmit(submitData),
        }),
    });
  }, [navigation, handleSubmit, transactionID]);
  return formState.isLoading ? (
    <LoadingScreen />
  ) : (
    <View>
      <TextInput<ITransactionForm, 'title'>
        control={control}
        label="Title"
        name="title"
        rules={{
          required: 'This is actually required.',
        }}
      />
      <CurrencyInput<ITransactionForm, 'amount'>
        format={f.format}
        control={control}
        label="Amount"
        name="amount"
        rules={{
          required: 'WTF?',
        }}
      />
    </View>
  );
}

const f = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});
