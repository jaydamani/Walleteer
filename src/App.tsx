import "react-native-gesture-handler";
import { DarkTheme } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator theme={DarkTheme} />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
