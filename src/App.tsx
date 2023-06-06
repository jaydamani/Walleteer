import RootNavigator from "@Navigation/RootNavigator";
import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

registerRootComponent(App);
