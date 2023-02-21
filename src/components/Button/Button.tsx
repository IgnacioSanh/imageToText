import React from 'react';
import { TouchableOpacity } from 'react-native';

import { H1 } from '@theme';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={{ backgroundColor: 'pink' }} onPress={onPress}>
      <H1>{label}</H1>
    </TouchableOpacity>
  );
}
