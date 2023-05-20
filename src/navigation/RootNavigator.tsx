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
import { screens } from "@Screens";
import { useState } from "react";
import { ThemeContext } from "@Context/settings";

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

export default function RootNavigator() {
  const Drawer = createDrawerNavigator();
  const [theme, setTheme] = useState(DarkTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator
          screenOptions={{}}
          initialRouteName="Home"
          drawerContent={DrawerContent}
        >
          {screens.map((screen) => (
            <Drawer.Screen
              key={screen.name}
              name={screen.name}
              component={() => <screen.component />}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
