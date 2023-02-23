import React from 'react';

import { render } from '@testing-library/react-native';
import SectionListItem from './SectionListItem';

const TITLE = 'Title';
const SUBTITLE = 'Subtitle';

describe('SectionListItem', () => {
  test('Renders texts and image', () => {
    const { getByText, getByTestId } = render(
      <SectionListItem title={TITLE} subtitle={SUBTITLE} />,
    );
    getByText(TITLE);
    getByText(SUBTITLE);
    getByTestId('empty-image');
  });
});
