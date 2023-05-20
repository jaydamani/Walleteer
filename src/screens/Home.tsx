import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useContext } from "react";
import { Button } from "react-native";
import { ThemeContext } from "@Context/settings";
import { MainText } from "@Components";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";

export const options: DrawerNavigationOptions = {
  headerTitle: "Home",
  drawerIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
};

function Butt({}) {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <Button
      title={"Test"}
      onPress={() => setTheme(theme == DefaultTheme ? DarkTheme : DefaultTheme)}
    ></Button>
  );
}

function Tex({}) {
  return <MainText>test</MainText>;
}

export function Component({ navigation, route }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarContentContainerStyle: {
          borderTopWidth: 0,
          shadowColor: "transparent",
        },
      }}
    >
      <Tab.Screen name="Test1" component={Butt} />
      <Tab.Screen name="Test2" component={Tex} />
      <Tab.Screen name="Test3" component={Tex} />
    </Tab.Navigator>
  );
}
