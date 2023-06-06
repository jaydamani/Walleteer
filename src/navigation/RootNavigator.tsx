import { DrawerContent } from "@Components";
import { ThemeContext } from "@Context/settings";
import { screens } from "@Screens";
import { CombinedDarkTheme } from "@Styles/themes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Provider } from "react-native-paper";

export default function RootNavigator() {
  const Drawer = createDrawerNavigator();
  const [theme, setTheme] = useState(CombinedDarkTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Provider theme={theme}>
        <NavigationContainer theme={theme}>
          <Drawer.Navigator
            screenOptions={{
              headerStyle: {
                borderBottomWidth: 0,
                shadowColor: "transparent",
              },
            }}
            initialRouteName="Home"
            drawerContent={DrawerContent}
          >
            {screens.map((screen) => (
              <Drawer.Screen
                key={screen.name}
                {...screen}
                component={screen.Component}
              />
            ))}
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeContext.Provider>
  );
}
