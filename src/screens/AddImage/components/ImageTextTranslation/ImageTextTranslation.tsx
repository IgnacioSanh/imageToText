import { StandardFont } from '@theme/typography';
import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Wrapper, Header, Column, Title, Body } from './styles';

const Loader = () => <ActivityIndicator testID="loader" />;

interface ImageTextTranslationProps {
  original?: string;
  translation?: string;
}

export default function ImageTextTranslation({
  original,
  translation,
}: ImageTextTranslationProps) {
  return (
    <Wrapper>
      <Column>
        <Header>
          <Title>Original</Title>
        </Header>
        <Body>
          {original ? <StandardFont>{original}</StandardFont> : <Loader />}
        </Body>
      </Column>
      <Column>
        <Header primary>
          <Title>Translation</Title>
        </Header>
        <Body>
          {translation ? (
            <StandardFont>{translation}</StandardFont>
          ) : (
            <Loader />
          )}
        </Body>
      </Column>
    </Wrapper>
  );
}
