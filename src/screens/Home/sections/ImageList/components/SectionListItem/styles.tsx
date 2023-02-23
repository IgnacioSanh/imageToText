import styled from 'styled-components/native';

import { Colors } from '@theme/colors';
import { Spacings } from '@theme/dimensions';

export const EmptyImage = styled.View`
  background-color: ${Colors.gray};
  width: 50px;
  height: 50px;
  margin-right: ${Spacings.small}px;
`;

export const ItemWrapper = styled.View`
  flex-direction: row;
`;

export const TextWrapper = styled.View`
  justify-content: space-around;
`;

export const RowFront = styled.View`
  background-color: white;
`;

export const RowBack = styled.View`
  align-items: center;
  background-color: ${Colors.primary};
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 28px;
`;

export const RowWrapper = styled.View`
  margin-bottom: ${Spacings.small}px;
`;

export const TrashButton = styled.TouchableOpacity`
  flex: 1;
`;
