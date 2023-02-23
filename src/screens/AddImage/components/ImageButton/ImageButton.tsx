import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { Colors } from '@theme/colors';
import { ImageButtonContainer, ImageButtonTitle } from './styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ImageButtonProps {
  icon: IconProp;
  title: string;
  onPress: () => void;
}

export default function ImageButton({
  icon,
  title,
  onPress,
}: ImageButtonProps) {
  return (
    <ImageButtonContainer onPress={onPress}>
      <FontAwesomeIcon icon={icon} size={30} color={Colors.black} />
      <ImageButtonTitle>{title}</ImageButtonTitle>
    </ImageButtonContainer>
  );
}
