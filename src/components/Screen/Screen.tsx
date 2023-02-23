import React from 'react';
import { SafeAreaView } from 'react-native';

import { Wrapper } from './styles';

interface ScreenProps {
  children: React.ReactNode;
}

export default function Screen({ children }: ScreenProps) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <Wrapper>{children}</Wrapper>
    </SafeAreaView>
  );
}
