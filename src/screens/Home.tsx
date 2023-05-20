import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useContext } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "@Context/settings";
import { MainText } from "@Components";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";

export const options: DrawerNavigationOptions = {
  headerTitle: "Home",
  drawerIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
};

export function Component({ navigation, route }) {
  const Tab = createMaterialTopTabNavigator();
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen
          name="Test1"
          component={() => (
            <Button
              title={"Test"}
              onPress={() =>
                setTheme(theme == DefaultTheme ? DarkTheme : DefaultTheme)
              }
            ></Button>
          )}
        />
        <Tab.Screen name="Test2" component={() => <MainText>test</MainText>} />
        <Tab.Screen name="Test3" component={() => <MainText>test</MainText>} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
