import { DrawerContent } from '@Components';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, homeScreenOptions } from '@Screens/Home';

export function DrawerNavigator() {
  const Drawer = createDrawerNavigator<DrawerList>();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
          shadowColor: 'transparent',
        },
      }}
      initialRouteName="Home"
      drawerContent={DrawerContent}>
      <Drawer.Screen<'Home'>
        name="Home"
        component={Home}
        options={homeScreenOptions}
      />
      <Drawer.Screen name="Nothing" component={Nothing} />
    </Drawer.Navigator>
  );
}

function Nothing() {
  return <></>;
}

export type DrawerList = {
  Home: undefined;
  Nothing: undefined;
};
export type DrawerNames = keyof DrawerList;
