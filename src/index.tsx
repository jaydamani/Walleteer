import RootNavigator from '@Navigation/RootNavigator';
import 'react-native-gesture-handler';
import { setupDB } from '@database';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoadingScreen from './screens/LoadingScreen';
import { PaperProvider, Text } from 'react-native-paper';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState<any>('');
  useEffect(function () {
    Promise.resolve()
      .then(setupDB)
      .catch(setErr)
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <PaperProvider>
      <SafeAreaProvider>
        {isLoading ? (
          <LoadingScreen />
        ) : err ? (
          <Text>{err.message ?? err}</Text>
        ) : (
          <RootNavigator />
        )}
      </SafeAreaProvider>
    </PaperProvider>
  );
}
