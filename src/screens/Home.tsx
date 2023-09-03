import { TransactionList } from '@Components';
import {
  DrawerNavigationOptions,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
      <FAB icon="plus" onPress={createTransaction} style={styles.FAB} />
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
    height: '100%',
  },
});
