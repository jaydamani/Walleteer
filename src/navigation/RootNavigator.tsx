import { createDrawerNavigator } from "@react-navigation/drawer";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
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
          screenOptions={{
            headerStyle: {
              borderBottomWidth: 0,
              shadowColor: 'transparent',
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
    </ThemeContext.Provider>
    // </SafeAreaView>
  );
}
