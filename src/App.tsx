import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './navigators/AppNavigator';
import {ReactQueryProvider} from './providers';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <ReactQueryProvider>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ReactQueryProvider>
  );
};

export default App;
