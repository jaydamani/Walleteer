import RootNavigator from '@Navigation/RootNavigator';
import 'react-native-gesture-handler';
import { setupDB } from '@database';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NotLoaded from './screens/NotLoaded';
import { Text } from 'react-native-ui-lib';

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErr] = useState('');
  useEffect(function () {
    Promise.resolve()
      .then(setupDB)
      .then(() => setIsLoading(false))
      .catch(err => {
        setIsLoading(false);
        console.error(err);
        setErr(err.message ?? err);
      });
  }, []);
  return (
    <SafeAreaProvider>
      {isLoading ? (
        <NotLoaded />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <RootNavigator />
      )}
    </SafeAreaProvider>
  );
}
