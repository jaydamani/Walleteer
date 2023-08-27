import { useNavTheme } from '@lib/theme';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerList, DrawerNavigator } from './DrawerNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransactionForm } from '@Components';

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
          <Stack.Screen name="transactionForm" component={TransactionForm} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootScreens = {
  transactionForm: undefined;
  root: undefined;
};

export type Screens = RootScreens & DrawerList;
