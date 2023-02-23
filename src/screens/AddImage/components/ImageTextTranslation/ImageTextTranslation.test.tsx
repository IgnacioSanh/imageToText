import React from 'react';

import { render } from '@testing-library/react-native';

import ImageTextTranslation from './ImageTextTranslation';

const BODY_ORIGINAL = 'body original';
const BODY_TRANSLATION = 'body translation';
const LOADER_TEST_ID = 'loader';

describe('ImageTextTranslation', () => {
  test('Renders body and title', () => {
    const { getByText } = render(
      <ImageTextTranslation
        original={BODY_ORIGINAL}
        translation={BODY_TRANSLATION}
      />,
    );
    getByText(/^original$/i);
    getByText(/^translation$/i);
    getByText(BODY_ORIGINAL);
    getByText(BODY_TRANSLATION);
  });
  test('When original body is undefined, show loader', () => {
    const { getAllByTestId, getByText } = render(
      <ImageTextTranslation translation={BODY_TRANSLATION} />,
    );

    getByText(BODY_TRANSLATION);
    expect(getAllByTestId(LOADER_TEST_ID)).toHaveLength(1);
  });
  test('When translation body is undefined, show loader', () => {
    const { getAllByTestId, getByText, queryByText } = render(
      <ImageTextTranslation original={BODY_ORIGINAL} />,
    );

    getByText(BODY_ORIGINAL);
    expect(queryByText(BODY_TRANSLATION)).toBeNull();
    expect(getAllByTestId(LOADER_TEST_ID)).toHaveLength(1);
  });
  test('When both bodies are undefined, show loader on both sides', () => {
    const { getAllByTestId, queryByText } = render(<ImageTextTranslation />);

    expect(queryByText(BODY_TRANSLATION)).toBeNull();
    expect(queryByText(BODY_ORIGINAL)).toBeNull();
    expect(getAllByTestId(LOADER_TEST_ID)).toHaveLength(2);
  });
});
