import React from 'react';

import FloatingButton from './FloatingButton';

import { fireEvent, render } from '@testing-library/react-native';

describe('FloatingButton', () => {
  test('Shows an icon and has position absolute', () => {
    const { getByTestId } = render(<FloatingButton handlePress={jest.fn} />);
    expect(getByTestId('floating-button').props.style).toHaveProperty(
      'position',
      'absolute',
    );
    expect(getByTestId('icon').props.icon).toHaveProperty('iconName', 'camera');
  });

  test('Calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <FloatingButton handlePress={onPressMock} />,
    );
    fireEvent.press(getByTestId('floating-button'));

    expect(onPressMock).toBeCalledTimes(1);
  });
});
