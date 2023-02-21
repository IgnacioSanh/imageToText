import React from 'react';

import RootNavigator from '@navigators/RootNavigator';
import ImageProvider from '~store/imageProvider';

export default function App() {
  return (
    <ImageProvider>
      <RootNavigator />
    </ImageProvider>
  );
}
