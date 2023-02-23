import { Colors } from '@theme/colors';
import { BorderRadius, Spacings } from '@theme/dimensions';
import { StandardFont } from '@theme/typography';
import styled from 'styled-components/native';

export const ImageButtonContainer = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  height: 100px;
  flex: 1;
  border-radius: ${BorderRadius.bordered}px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px ${Colors.gray}80;
  margin-bottom: 10px;
`;

export const ImageButtonTitle = styled(StandardFont)`
  margin-top: ${Spacings.small / 2}px;
  color: ${Colors.black};
`;
