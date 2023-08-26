import { DrawerContent } from '@Components';
import { screens } from '@Screens';
import { useNavTheme } from '@lib/theme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function RootNavigator() {
  const Drawer = createDrawerNavigator();
  const theme = useNavTheme();
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            borderBottomWidth: 0,
            shadowColor: 'transparent',
          },
        }}
        initialRouteName="Home"
        drawerContent={DrawerContent}>
        {screens.map(screen => (
          <Drawer.Screen
            key={screen.name}
            {...screen}
            component={screen.Component}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
