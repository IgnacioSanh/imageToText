import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@theme/colors';
import { BorderRadius, Spacings } from '@theme/dimensions';
import styled from 'styled-components/native';

export const Button = styled.View`
  background-color: ${Colors.primary};
  padding: ${Spacings.small}px ${Spacings.medium}px;
  border-top-right-radius: ${BorderRadius.rounded}px;
  border-bottom-right-radius: ${BorderRadius.rounded}px;
`;

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  background-color: white;
`;

export const WhiteSafeAreaView = styled(SafeAreaView)`
  background-color: white;
`;
