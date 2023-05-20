import {
  DrawerContentComponentProps,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export function DrawerContent({
  state,
  navigation,
  descriptors,
}: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView>
      {/* <SafeAreaView style={{ height: 150 }} /> */}
      <DrawerItemList
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    </SafeAreaView>
  );
}
