import React from 'react';

import { SwipeRow } from 'react-native-swipe-list-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';

import { StandardFont, SmallFont } from '@theme';
import {
  EmptyImage,
  ItemWrapper,
  TextWrapper,
  RowFront,
  RowBack,
  RowWrapper,
  TrashButton,
} from './styles';

interface SectionListItemProps {
  title: string;
  subtitle: string;
  imageURL?: string;
}

export default function SectionListItem({
  title,
  subtitle,
  imageURL,
}: SectionListItemProps) {
  return (
    <RowWrapper>
      {/* @ts-ignore */}
      <SwipeRow rightOpenValue={-75}>
        <TrashButton onPress={() => console.log('pressed')}>
          <RowBack>
            <FontAwesomeIcon icon={faTrashAlt} size={18} />
          </RowBack>
        </TrashButton>
        <RowFront>
          <ItemWrapper>
            {imageURL ? null : <EmptyImage testID="empty-image" />}
            <TextWrapper>
              <StandardFont>{title}</StandardFont>
              <SmallFont>{subtitle}</SmallFont>
            </TextWrapper>
          </ItemWrapper>
        </RowFront>
      </SwipeRow>
    </RowWrapper>
  );
}
