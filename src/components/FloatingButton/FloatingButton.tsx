import React from 'react';

import { Button } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';

interface FloatingButtonProps {
  handlePress: () => void;
}

export default function FloatingButton({ handlePress }: FloatingButtonProps) {
  return (
    <Button onPress={handlePress}>
      <FontAwesomeIcon icon={faCamera} size={30} />
    </Button>
  );
}
