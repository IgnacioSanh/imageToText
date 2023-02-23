import React from 'react';

import { H2 } from '@theme/typography';
import { Wrapper } from './styles';

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <Wrapper>
      <H2>{title}</H2>
    </Wrapper>
  );
}
