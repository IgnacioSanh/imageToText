import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import Button from './Button';

const LABEL = 'Button';

describe('Button', () => {
  test('Renders label. By default is not disabled', () => {
    const { getByText, getByTestId } = render(
      <Button label={LABEL} onPress={jest.fn} />,
    );
    getByText(LABEL);
    expect(getByTestId('button').props.accessibilityState).toHaveProperty(
      'disabled',
      undefined,
    );
  });

  test('By default, button is enabled, and onPress is called when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button label={LABEL} onPress={onPressMock} />,
    );
    fireEvent.press(getByTestId('button'));

    expect(onPressMock).toBeCalledTimes(1);
  });

  test('When button is disabled, onPress is never called when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button label={LABEL} onPress={onPressMock} enabled={false} />,
    );
    const button = getByTestId('button');
    expect(button.props.accessibilityState).toHaveProperty('disabled', true);
    fireEvent.press(button);

    expect(onPressMock).not.toBeCalled();
  });
});
