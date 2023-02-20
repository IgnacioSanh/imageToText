import React, { useState } from 'react';
import { Image, SectionList, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Center, H1, H2, StandardFont } from '@theme';
import { SearchBar, FloatingButton, Screen } from '@components';

import Arrow from '../../../assets/svgs/Arrow';
import { RootNavigatorParamList, ScreenNames } from '~types';

type HomeProps = NativeStackScreenProps<
  RootNavigatorParamList,
  ScreenNames.HOME
>;

interface PhotoMetadata {
  addedDate: string;
  name: string;
}

interface PhotoListItem {
  title: string;
  data: PhotoMetadata;
}

const data = [
  {
    title: 'March - 2013',
    data: {
      addedDate: 'March 3 - 2023',
      name: 'First Photo',
    },
  },
  {
    title: 'June - 2013',
    data: {
      addedDate: 'June 5 - 2023',
      name: 'Other Photo',
    },
  },
];

const PhotoList = SectionList<PhotoListItem>;

export default function Home({ navigation }: HomeProps) {
  const [photoList, setPhotoList] = useState([]);

  if (photoList.length > 0) {
    return (
      <Screen>
        <SearchBar />
        <SectionList
          sections={photoList}
          renderItem={({ item }) => (
            <View>
              <StandardFont>{item.title}</StandardFont>
            </View>
          )}
        />
      </Screen>
    );
  }
  return (
    <Screen>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <SearchBar />
        <Image
          source={require('../../../assets/images/person-app.png')}
          resizeMethod="auto"
          resizeMode="contain"
        />
        <Center>
          <H1>There is nothing to show</H1>
          <H2>Oops! it seems you have no images yet</H2>
          <Arrow />
        </Center>
      </View>
      <FloatingButton
        handlePress={() => navigation.navigate(ScreenNames.DETAIL)}
      />
    </Screen>
  );
}
