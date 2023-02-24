import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { differenceInCalendarDays } from 'date-fns';

import { SearchBar, FloatingButton, Screen } from '@components';

import { NoImagesSection, ImageListSection } from './sections';

import { RootNavigatorParamList, ScreenNames } from '~types';
import { useImageProvider } from '~store/imageProvider';

type HomeProps = NativeStackScreenProps<
  RootNavigatorParamList,
  ScreenNames.HOME
>;

export default function Home({ navigation }: HomeProps) {
  const [filterText, setFilterText] = useState<string>();
  const [filterDate, setFilterDate] = useState<Date>();
  const { images } = useImageProvider();

  const filteredImages = images.filter(
    image =>
      image.name === (filterText ?? image.name) &&
      differenceInCalendarDays(image.date, filterDate ?? image.date) === 0,
  );

  return (
    <Screen>
      <SearchBar
        search={text => setFilterText(text)}
        setFilterDate={setFilterDate}
      />
      {images.length > 0 ? (
        <ImageListSection images={filteredImages} />
      ) : (
        <NoImagesSection />
      )}
      <FloatingButton
        handlePress={() => navigation.navigate(ScreenNames.ADD_IMAGE)}
      />
    </Screen>
  );
}
