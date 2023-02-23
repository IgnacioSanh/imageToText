import React from 'react';

import { render } from '@testing-library/react-native';

import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  const TITLE = 'test title';
  test('renders component', () => {
    const { getByText } = render(<SectionHeader title={TITLE} />);
    getByText(TITLE);
  });
});
