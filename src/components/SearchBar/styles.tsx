import styled from 'styled-components/native';

import { Colors, BorderRadius, Spacings } from '@theme';

export const InputWrapper = styled.View`
  background-color: ${Colors.secondary};
  padding-left: ${Spacings.medium}px;
  height: 40px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${Spacings.small}px;
`;

export const SearchButton = styled.View`
  background-color: ${Colors.primary};
  border-top-right-radius: ${BorderRadius.fullRounded}px;
  border-bottom-right-radius: ${BorderRadius.fullRounded}px;
  flex-direction: row;
  justify-content: center;
  flex: 20;
`;
