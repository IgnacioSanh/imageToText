import React from 'react';

import { Image } from 'react-native';

import { Center, H1, H2 } from '@theme';

import Arrow from '../../../../../assets/svgs/Arrow';
import { Container } from './styles';

export default function NoImages() {
  return (
    <Container>
      <Image
        source={require('../../../../../assets/images/person-app.png')}
        resizeMethod="auto"
        resizeMode="contain"
      />
      <Center>
        <H1>There is nothing to show</H1>
        <H2>Oops! it seems you have no images yet</H2>
        <Arrow />
      </Center>
    </Container>
  );
}
