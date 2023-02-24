import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

import { Wrapper, Button } from './styles';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function NavigationHeader({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <Wrapper onPress={() => navigation.goBack()}>
      <Button>
        <FontAwesomeIcon icon={faArrowLeft} size={24} />
      </Button>
    </Wrapper>
  );
}
