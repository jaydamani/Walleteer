import { TextStyle, useWindowDimensions } from "react-native";
import { Avatar, List, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";

interface Transaction {
  title: string;
  category: string;
  amount: number;
  date: Date;
}

function Transaction({ title, category, amount, date }: Transaction) {
  const theme = useTheme();
  const rightStyle: TextStyle = {
    color: amount < 0 ? "red" : "green",
    textAlign: "right",
  };
  return (
    <List.Item
      title={title}
      left={() => (
        <Avatar.Text
          size={useWindowDimensions().fontScale * 40.5}
          color={theme.colors.onPrimary}
          label={category}
        />
      )}
      right={() => (
        <Icon style={[theme.fonts.labelLarge, rightStyle]} name="plus">
          300
        </Icon>
      )}
      centered={false}
      description={`${date.toDateString()}`}
    />
  );
}

export function TransactionList() {
  return (
    <List.Section
      style={{
        marginLeft: 10,
      }}
    >
      <List.Subheader style={{ paddingVertical: 0 }}>test</List.Subheader>
      <Transaction title="title" amount={10} category="T" date={new Date()} />
    </List.Section>
  );
}
