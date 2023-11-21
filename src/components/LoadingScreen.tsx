import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export function LoadingScreen() {
  const [show, setShow] = useState(false);
  useEffect(function () {
    setTimeout(() => setShow(true), 3000);
  }, []);
  return show ? (
    <View style={[styles.container, StyleSheet.absoluteFill]}>
      <ActivityIndicator animating size="large" />
    </View>
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex: 20
  },
});
