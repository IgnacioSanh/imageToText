import styled from 'styled-components/native';

import { Colors } from '@theme/colors';
import { Spacings } from '@theme/dimensions';
import { StandardBoldFont } from '@theme/typography';

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Header = styled.View<{ primary?: boolean }>`
  background-color: ${({ primary }) =>
    primary ? Colors.primary : Colors.gray};
  flex-direction: row;
  justify-content: center;
  padding: ${Spacings.small}px;
`;

export const Column = styled.View`
  flex: 1;
`;

export const Title = styled(StandardBoldFont)`
  color: ${Colors.black};
`;

export const Body = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${Spacings.medium}px;
`;
