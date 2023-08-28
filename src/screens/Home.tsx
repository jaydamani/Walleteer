import { TransactionList } from '@Components';
import {
  DrawerNavigationOptions,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { View } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome5';
import '@lib/theme';
import { Screens } from '@Navigation/RootNavigator';

export const homeScreenOptions: DrawerNavigationOptions = {
  drawerIcon: props => <Icon name="home" {...props} />,
};

export function Home({ navigation }: DrawerScreenProps<Screens, 'Home'>) {
  function createTransaction() {
    navigation.navigate('transactionForm', {});
  }
  return (
    <View style={styles.container}>
      <TransactionList />
      <FAB
        // visible
        icon="plus"
        onPress={createTransaction}
        style={styles.FAB}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  FAB: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 16,
  },
  container: {
    // width: '100%',
    height: '100%',
  },
});
// const __ = async () =>
//   transactions.create(t => {
//     t.title = 'test';
//     t.amount = Math.round(Math.random() * 100 - 50);
//     t.category.id = CategoryID.TEST;
//     t.date = new Date(2023, Math.random() * 11, Math.random() * 28);
//     return t;
//   });
