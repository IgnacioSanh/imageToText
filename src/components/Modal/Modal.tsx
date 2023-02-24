import React from 'react';

import { Modal as ModalRN } from 'react-native';

import {
  Mask,
  Box,
  ButtonsRow,
  Button,
  TextWrapper,
  StandardBlackFont,
} from './styles';

interface ModalProps {
  isVisible: boolean;
  title: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  handleAccept: () => void;
  handleClose: () => void;
}

export default function Modal({
  title,
  primaryButtonText,
  secondaryButtonText,
  isVisible,
  handleAccept,
  handleClose,
}: ModalProps) {
  return (
    <ModalRN visible={isVisible} transparent>
      <Mask>
        <Box>
          <TextWrapper>
            <StandardBlackFont>{title}</StandardBlackFont>
          </TextWrapper>
          <ButtonsRow>
            <Button primary onPress={handleAccept}>
              <StandardBlackFont>{primaryButtonText}</StandardBlackFont>
            </Button>
            <Button onPress={handleClose}>
              <StandardBlackFont>{secondaryButtonText}</StandardBlackFont>
            </Button>
          </ButtonsRow>
        </Box>
      </Mask>
    </ModalRN>
  );
}
