import React from 'react';

import Toast from 'react-native-toast-message';

import RootNavigator from '@navigators/RootNavigator';
import ImageProvider from '~store/imageProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <ImageProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
      <Toast />
    </ImageProvider>
  );
}
