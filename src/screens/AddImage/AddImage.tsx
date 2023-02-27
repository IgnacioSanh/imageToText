import React, { useState } from 'react';

import { Image } from 'react-native';
import Toast from 'react-native-toast-message';
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages';
import { faCameraAlt } from '@fortawesome/free-solid-svg-icons/faCameraAlt';

import { Screen, Button } from '@components';
import { StandardBoldFont } from '@theme';
import { PhoneImageUtil, ImageProcessorUtil, TranslatorUtil } from '~utils';
import { ImageButton, ImageTextTranslation } from './components';

import { ButtonsWrapper, Input } from './styles';
import { useImageProvider } from '~store/imageProvider';
import {
  MediaOrigin,
  RootNavigatorParamList,
  SavedImage,
  ScreenNames,
} from '~types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AddImageProps = NativeStackScreenProps<
  RootNavigatorParamList,
  ScreenNames.ADD_IMAGE
>;

const MOCK_TRANSLATE_TEXT = false;
const MOCK_IMAGE_TO_TEXT = false;

export default function AddImage({ navigation }: AddImageProps) {
  const [imageToSave, setImageToSave] = useState<Partial<SavedImage>>({});
  const [imageName, setImageName] = useState('');

  const { images, setImages } = useImageProvider();

  async function selectImage(mediaOrigin: MediaOrigin) {
    try {
      const response =
        mediaOrigin === MediaOrigin.GALLERY
          ? await PhoneImageUtil.pickImageFromGallery()
          : await PhoneImageUtil.takePicture();
      setImageToSave(image => ({
        ...image,
        uri: response?.uri,
        id: response?.fileName,
      }));
      const imageTextResponse = MOCK_IMAGE_TO_TEXT
        ? 'This is complicated'
        : await ImageProcessorUtil.imageToText(response?.uri);
      setImageToSave(image => ({
        ...image,
        text: imageTextResponse,
      }));
      const translatedText = MOCK_TRANSLATE_TEXT
        ? 'Esto es complicado'
        : await TranslatorUtil.translate(imageTextResponse!);
      setImageToSave(image => ({
        ...image,
        translation: translatedText,
      }));
    } catch (error: any) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'An error ocurred',
        text2: error.message ?? 'An error ocurred. Try again.',
      });
    }
  }

  function saveImage() {
    const newImage = {
      ...imageToSave,
      date: new Date(),
      name: imageName,
    } as SavedImage;
    setImages([...images, newImage]);
    Toast.show({
      type: 'success',
      text1: 'Saved',
      text2: 'Your image was saved correctly!',
    });
    navigation.goBack();
  }
  const { uri, translation, text } = imageToSave as SavedImage;

  return (
    <Screen>
      {uri ? (
        <>
          <Image
            source={{ uri }}
            resizeMode="contain"
            resizeMethod="scale"
            style={{ flex: 1, maxHeight: 300, backgroundColor: 'gray' }}
          />
          <ImageTextTranslation original={text} translation={translation} />
          <StandardBoldFont>Image name</StandardBoldFont>
          <Input
            placeholder="Enter the name of the image"
            onChangeText={textInput => setImageName(textInput)}
          />

          <Button
            label="Save"
            onPress={saveImage}
            enabled={!!uri && !!text && !!translation && !!imageName}
          />
        </>
      ) : (
        <>
          <StandardBoldFont>Add image by...</StandardBoldFont>
          <ButtonsWrapper>
            <ImageButton
              icon={faImages}
              title="Gallery"
              onPress={() => selectImage(MediaOrigin.GALLERY)}
            />
            <ImageButton
              icon={faCameraAlt}
              title="Camera"
              onPress={() => selectImage(MediaOrigin.CAMERA)}
            />
          </ButtonsWrapper>
        </>
      )}
    </Screen>
  );
}
