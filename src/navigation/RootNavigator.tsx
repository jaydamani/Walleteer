import { useNavTheme } from '@lib/theme';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerList, DrawerNavigator } from './DrawerNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  TransactionForm,
  getTransactionFormOptions,
} from '@Screens/TransactionForm';

export default function RootNavigator() {
  const theme = useNavTheme();
  const Stack = createNativeStackNavigator<RootScreens>();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="root" component={DrawerNavigator} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="transactionForm"
            component={TransactionForm}
            options={getTransactionFormOptions}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootScreens = {
  transactionForm: {
    id?: string;
  };
  root: undefined;
};

export type Screens = RootScreens & DrawerList;
