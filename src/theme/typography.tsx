import styled from 'styled-components/native';

import { Colors } from './colors';

export const H1 = styled.Text`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  color: ${Colors.black};
`;

export const H2 = styled.Text`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 24px;
  color: ${Colors.gray};
`;

export const StandardFontSize = 16;

export const StandardFont = styled.Text`
  font-family: 'Roboto';
  font-size: ${StandardFontSize}px;
  color: ${Colors.gray};
`;

export const StandardBoldFont = styled.Text`
  font-family: 'Roboto';
  font-size: ${StandardFontSize}px;
  color: ${Colors.gray};
  font-weight: 600;
`;

export const SmallFont = styled.Text`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${Colors.black};
`;
