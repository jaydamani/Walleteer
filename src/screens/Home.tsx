import { TransactionList } from '@Components';
import { database, transactions } from '@database';
import { CategoryID } from '@lib/constants';
import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { FloatingButton } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const options: DrawerNavigationOptions = {
  headerTitle: 'Home',
  drawerIcon: props => <Icon name="home" {...props} />,
};

export function Component(_: ScreenProps) {
  return (
    <View style={styles.container}>
      <TransactionList />
      <FloatingButton
        button={{
          onPress: () => {
            database
              .write(async () =>
                transactions.create(t => {
                  t.title = 'test';
                  t.amount = Math.round(Math.random() * 100 - 50);
                  t.category.id = CategoryID.TEST;
                  t.date = new Date(
                    2023,
                    Math.random() * 11,
                    Math.random() * 28,
                  );
                  return t;
                }),
              )
              .catch(console.error);
          },
        }}
        // style={styles.FAB}
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
    width: '100%',
    height: '100%',
  },
});
