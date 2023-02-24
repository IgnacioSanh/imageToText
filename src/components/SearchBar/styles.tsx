import styled from 'styled-components/native';

import { Colors, BorderRadius, Spacings } from '@theme';

export const InputWrapper = styled.View`
  background-color: ${Colors.secondary};
  height: 40px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${Spacings.small}px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  border-top-right-radius: ${BorderRadius.fullRounded}px;
  border-bottom-right-radius: ${BorderRadius.fullRounded}px;
  flex-direction: row;
  justify-content: center;
  flex: 20;
`;

export const DateSearchButton = styled.TouchableOpacity`
  align-self: center;
  margin-right: ${Spacings.medium}px;
  left: 0;
  background-color: ${Colors.clearGray};
  padding: ${Spacings.small}px;
  border-radius: ${BorderRadius.fullRounded}px;
`;

export const ClearFilter = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  padding: ${Spacings.small}px ${Spacings.medium}px;
  margin-right: ${Spacings.medium}px;
  border-radius: ${BorderRadius.rounded}px;
`;

export const Filters = styled.View`
  flex-direction: row;
`;
