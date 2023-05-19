import {
  DrawerContentComponentProps,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { screens } from "../screens";

function DrawerContent({
  state,
  navigation,
  descriptors,
}: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[{ paddingTop: insets.top + 10 }]}>
      <SafeAreaView style={{ height: 150 }}></SafeAreaView>
      <DrawerItemList
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    </SafeAreaView>
  );
}

export default function RootNavigator({ isDark, setTheme }) {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        screenOptions={{}}
        initialRouteName="Home"
        drawerContent={DrawerContent}
      >
        {screens.map((screen) => (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            initialParams={{
              isDark,
              setTheme,
            }}
          >
            {() => <screen.component isDark={isDark} setTheme={setTheme}/>}
          </Drawer.Screen>
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
