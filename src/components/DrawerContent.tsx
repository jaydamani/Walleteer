import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export function DrawerContent({
  state,
  navigation,
  descriptors,
}: DrawerContentComponentProps) {
  return (
    <>
      <View style={styles.topContainer} />
      <DrawerItemList
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    height: 150,
  },
});
