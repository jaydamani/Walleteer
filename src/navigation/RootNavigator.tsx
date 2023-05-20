import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  DarkTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { screens } from "@Screens";
import { useState } from "react";
import { ThemeContext } from "@Context/settings";
import { DrawerContent } from "@Components";

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
