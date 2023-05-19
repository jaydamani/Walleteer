import { registerRootComponent } from "expo";
import { useState } from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./navigation/RootNavigator";

function App() {
  const [isDark, setTheme] = useState(true);
  return (
    <SafeAreaProvider>
      <RootNavigator setTheme={setTheme} isDark={isDark} />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
