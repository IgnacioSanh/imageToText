import React from 'react';
import { TouchableOpacity } from 'react-native';

import { H1 } from '@theme';

interface ButtonProps {
  label: string;
  handlePress: () => void;
}

export default function Button({ label, handlePress }: ButtonProps) {
  return (
    <TouchableOpacity style={{ backgroundColor: 'pink' }} onPress={handlePress}>
      <H1>{label}</H1>
    </TouchableOpacity>
  );
}
