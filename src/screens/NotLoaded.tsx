import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function NotLoaded() {
  return (
    <View style={[styles.container, StyleSheet.absoluteFill]}>
      <ActivityIndicator animating size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex: 20
  },
});
