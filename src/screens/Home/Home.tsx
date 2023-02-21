import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SearchBar, FloatingButton, Screen } from '@components';

import { NoImagesSection, ImageListSection } from './sections';

import { RootNavigatorParamList, ScreenNames } from '~types';
import { useImageProvider } from '~store/imageProvider';

type HomeProps = NativeStackScreenProps<
  RootNavigatorParamList,
  ScreenNames.HOME
>;

export default function Home({ navigation }: HomeProps) {
  const { images } = useImageProvider();

  return (
    <Screen>
      <SearchBar />
      {images.length > 0 ? <ImageListSection /> : <NoImagesSection />}
      <FloatingButton
        handlePress={() => navigation.navigate(ScreenNames.ADD_IMAGE)}
      />
    </Screen>
  );
}
