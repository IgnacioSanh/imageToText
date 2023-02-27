import React from 'react';

import { Screen } from '@components';
import { RootNavigatorParamList, ScreenNames } from '~types';
import { Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type DetailProps = RouteProp<RootNavigatorParamList, ScreenNames.DETAIL>;

export default function Detail({ params }: DetailProps) {
  return (
    <Screen>
      <Image
        source={{ uri: uri }}
        resizeMode="contain"
        resizeMethod="scale"
        style={{ flex: 1, maxHeight: 300, backgroundColor: 'gray' }}
      />
    </Screen>
  );
}
