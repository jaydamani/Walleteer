import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useContext } from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "@Context/settings";
import { MainText } from "@Components";

export function Home({ navigation, route }) {
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
        <Tab.Screen
          name="Test2"
          component={() => (
            <MainText >test</MainText>
          )}
        />
        <Tab.Screen
          name="Test3"
          component={() => (
            <MainText >test</MainText>
          )}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
