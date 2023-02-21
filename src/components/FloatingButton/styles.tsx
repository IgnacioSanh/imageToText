import styled from 'styled-components/native';

import { Colors, BorderRadius } from '@theme';

export const Button = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  height: 70px;
  width: 70px;
  border-radius: ${BorderRadius.fullRounded}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 30px;
`;
