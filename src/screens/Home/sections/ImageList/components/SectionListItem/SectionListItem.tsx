import React, { useState } from 'react';

import Toast from 'react-native-toast-message';
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
  Thumbnail,
} from './styles';
import { useImageProvider } from '~store/imageProvider';
import { Modal } from '@components/index';

interface SectionListItemProps {
  id: string;
  title: string;
  subtitle: string;
  imageURL?: string;
}

export default function SectionListItem({
  id,
  title,
  subtitle,
  imageURL,
}: SectionListItemProps) {
  const { setImages } = useImageProvider();

  const [showModal, setShowModal] = useState(false);

  function deleteImage() {
    setImages(images => images.filter(image => image.id !== id));
    Toast.show({
      type: 'info',
      text1: 'Deleted',
      text2: 'Your image was successfully removed from the list',
    });
  }

  return (
    <>
      <RowWrapper>
        {/* @ts-ignore */}
        <SwipeRow rightOpenValue={-70}>
          <TrashButton onPress={() => setShowModal(true)}>
            <RowBack>
              <FontAwesomeIcon icon={faTrashAlt} size={18} />
            </RowBack>
          </TrashButton>
          <RowFront>
            <ItemWrapper>
              {imageURL ? (
                <Thumbnail
                  source={{ uri: imageURL }}
                  resizeMode="contain"
                  resizeMethod="scale"
                />
              ) : (
                <EmptyImage testID="empty-image" />
              )}
              <TextWrapper>
                <StandardFont>{title}</StandardFont>
                <SmallFont>{subtitle}</SmallFont>
              </TextWrapper>
            </ItemWrapper>
          </RowFront>
        </SwipeRow>
      </RowWrapper>
      {showModal ? (
        <Modal
          isVisible={showModal}
          title="Confirm to delete"
          primaryButtonText="Delete"
          secondaryButtonText="Cancel"
          handleAccept={deleteImage}
          handleClose={() => setShowModal(false)}
        />
      ) : null}
    </>
  );
}
