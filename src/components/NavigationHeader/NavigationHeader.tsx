import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

import { Wrapper, Button, WhiteSafeAreaView } from './styles';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function NavigationHeader({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <WhiteSafeAreaView edges={['top']}>
      <Wrapper onPress={() => navigation.goBack()}>
        <Button>
          <FontAwesomeIcon icon={faArrowLeft} size={24} />
        </Button>
      </Wrapper>
    </WhiteSafeAreaView>
  );
}
