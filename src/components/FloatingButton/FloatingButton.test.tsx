import React from 'react';

import FloatingButton from './FloatingButton';

import { render } from '@testing-library/react-native';

describe('FloatingButton', () => {
  test('Renders pressable with icon', () => {
    const { debug } = render(<FloatingButton handlePress={jest.fn} />);
    debug();
  });
});
