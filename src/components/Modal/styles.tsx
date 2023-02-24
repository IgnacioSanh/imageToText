import { Colors } from '@theme/colors';
import { BorderRadius, Spacings } from '@theme/dimensions';
import { StandardFont } from '@theme/typography';
import styled from 'styled-components/native';

export const Mask = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Box = styled.View`
  border-radius: ${BorderRadius.bordered}px;
  background-color: white;
  overflow: hidden;
`;

export const ButtonsRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const TextWrapper = styled.View`
  align-items: center;
  padding: ${Spacings.medium}px ${Spacings.large}px;
`;

export const Button = styled.TouchableOpacity<{ primary?: boolean }>`
  background-color: ${({ primary }) =>
    primary ? Colors.primary : Colors.clearGray};
  align-items: center;
  padding: ${Spacings.medium}px ${Spacings.large * 2}px;
`;

export const StandardBlackFont = styled(StandardFont)`
  color: ${Colors.black};
`;
