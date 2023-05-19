import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home({ isDark, setTheme }) {
  const Tab = createMaterialTopTabNavigator();
  const theme = useTheme();
  return (
    <SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Test1">
          {() => (
            <Button title={"Test" + isDark + setTheme} onPress={() => setTheme(!isDark)}></Button>
          )}
        </Tab.Screen>
        <Tab.Screen name="Test2">
          {() => <Text style={{ color: theme.colors.text }}>test</Text>}
        </Tab.Screen>
        <Tab.Screen name="Test3">
          {() => <Text style={{ color: theme.colors.text }}>test</Text>}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}
