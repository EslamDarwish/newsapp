import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './navigators/AppNavigator';
import {ReactQueryProvider} from './providers';

const App = () => {
  return (
    <ReactQueryProvider>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </ReactQueryProvider>
  );
};

export default App;
