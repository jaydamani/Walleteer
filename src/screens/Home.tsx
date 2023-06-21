import { Transaction, TransactionList } from "@Components";
import Icon from "@expo/vector-icons/FontAwesome5";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import { ScreenProps } from "react-native-screens";

export const options: DrawerNavigationOptions = {
  headerTitle: "Home",
  drawerIcon: (props) => <Icon name="home" {...props} />,
};

export function Component(_: ScreenProps) {
  const [transactions, setTransactions] = useState<readonly Transaction[]>([
    {
      id: 1,
      title: "first",
      amount: 69,
      category: "A",
      date: new Date(2023, 4, 22),
    },
  ]);
  return (
    <View style={styles.container}>
      <TransactionList transactions={transactions} />
      <FAB
        icon="plus"
        onPress={() => {
          setTransactions([
            ...transactions,
            {
              id: transactions.length + 1,
              title: `${transactions.length + 1}. name`,
              amount: Math.round(Math.random() * 100 - 50),
              category: "T",
              date: new Date(
                2023,
                Math.round(Math.random() * 12),
                Math.round(Math.random() * 30)
              ),
            },
          ]);
        }}
        style={styles.FAB}
      ></FAB>
    </View>
  );
}

const styles = StyleSheet.create({
  FAB: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16,
  },
  container: {
    width: "100%",
    height: "100%",
  },
});
