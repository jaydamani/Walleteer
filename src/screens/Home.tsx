import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home({}) {
  return (
    <SafeAreaView>
      <Text style={{color: 'red', justifyContent: 'center'}}>Home</Text>
    </SafeAreaView>
  );
}