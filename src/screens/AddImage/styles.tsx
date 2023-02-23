import { Colors } from '@theme/colors';
import styled from 'styled-components/native';

import { StandardFontSize } from '@theme/typography';
import { BorderRadius, Spacings } from '@theme/dimensions';

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Input = styled.TextInput`
  border: 1px solid ${Colors.gray};
  border-radius: ${BorderRadius.bordered}px;
  font-size: ${StandardFontSize}px;
  padding: ${Spacings.medium}px;
`;
