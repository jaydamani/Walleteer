import { DrawerContent } from './Drawer'
import { createDrawerNavigator } from "@react-navigation/drawer";
import {  NavigationContainer } from "@react-navigation/native";
import { Home } from '../screens/Home';

export default function RootNavigator({ theme }) {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        screenOptions={{}}
        initialRouteName="Home"
        drawerContent={DrawerContent}
      >
      <Drawer.Screen name="Home" component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
