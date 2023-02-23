import { Colors } from '@theme/colors';
import { BorderRadius, Spacings } from '@theme/dimensions';
import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity<{ enabled: boolean }>`
  background-color: ${({ enabled }) =>
    enabled ? Colors.primary : Colors.clearGray};
  justify-content: center;
  align-items: center;
  padding: ${Spacings.medium}px;
  border-radius: ${BorderRadius.bordered}px;
  margin: ${Spacings.small}px 0;
`;
