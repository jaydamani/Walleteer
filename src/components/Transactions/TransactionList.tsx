import { TextStyle, useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { List, Avatar, useTheme } from "react-native-paper";
import Feather from "react-native-vector-icons/MaterialCommunityIcons";

export interface Transaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  date: Date;
  icon?: string;
}

export function TransactionList({
  transactions,
}: {
  transactions: readonly Transaction[];
}) {
  return (
    <ScrollView>
      <List.Section style={{ marginLeft: 10 }}>
        <List.Subheader style={{ paddingVertical: 0 }}>test</List.Subheader>
        {transactions.map((transaction) => (
          <List.Item
            key={transaction.id}
            {...createTransactionListItemProps(transaction)}
          />
        ))}
      </List.Section>
    </ScrollView>
  );
}

function createTransactionListItemProps({
  amount,
  category,
  date,
  title,
  icon,
}: Transaction) {
  const rightStyle: TextStyle = {
    color: amount < 0 ? "red" : "green",
    textAlign: "right",
  };
  function right() {
    return amount > 0 ? (
      <Feather style={rightStyle} name="plus">
        {amount}
      </Feather>
    ) : (
      <Feather style={rightStyle} name="minus">
        {-amount}
      </Feather>
    );
  }
  function left(props) {
    return icon ? (
      <List.Icon {...props} icon={icon} />
    ) : (
      <Avatar.Text
        size={40.5 * useWindowDimensions().fontScale}
        color={useTheme().colors.onPrimary}
        label={category}
      />
    );
  }
  function onPress() {
    return console.log("Form not created!!");
  }
  return { title, left, right, description: date.toDateString(), onPress };
}
