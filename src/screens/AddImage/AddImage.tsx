import React, { useState } from 'react';

import { Image } from 'react-native';
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages';
import { faCameraAlt } from '@fortawesome/free-solid-svg-icons/faCameraAlt';

import { Screen, Button } from '@components';
import { H1, StandardBoldFont } from '@theme';
import { PhoneImageUtil, ImageProcessorUtil, TranslatorUtil } from '~utils';
import { ImageButton, ImageTextTranslation } from './components';

import { ButtonsWrapper, Input } from './styles';
import { useImageProvider } from '~store/imageProvider';
import { RootNavigatorParamList, SavedImage, ScreenNames } from '~types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const MOCK_TEXT = true;

type AddImageProps = NativeStackScreenProps<
  RootNavigatorParamList,
  ScreenNames.ADD_IMAGE
>;

export default function AddImage({ navigation }: AddImageProps) {
  const [imageToSave, setImageToSave] = useState<Partial<SavedImage>>({});
  const [imageName, setImageName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();

  const { images, setImages } = useImageProvider();

  async function openGallery() {
    try {
      const response = await PhoneImageUtil.pickImageFromGallery();
      setImageToSave(image => ({
        ...image,
        uri: response?.uri,
        id: response?.fileName,
      }));
      const imageTextResponse = MOCK_TEXT
        ? 'This is complicated'
        : await ImageProcessorUtil.imageToText(response?.uri);
      setImageToSave(image => ({
        ...image,
        text: imageTextResponse,
      }));
      const translatedText = MOCK_TEXT
        ? 'Esto es complicado'
        : await TranslatorUtil.translate(imageTextResponse!);
      setImageToSave(image => ({
        ...image,
        translation: translatedText,
      }));
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  }

  function saveImage() {
    const newImage = {
      ...imageToSave,
      date: new Date(),
      name: imageName,
    } as SavedImage;
    setImages([...images, newImage]);
    navigation.goBack();
  }
  const { uri, translation, text } = imageToSave as SavedImage;

  return (
    <Screen>
      {errorMessage ? <H1>{errorMessage}</H1> : null}
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
              onPress={openGallery}
            />
            <ImageButton
              icon={faCameraAlt}
              title="Camera"
              onPress={openGallery}
            />
          </ButtonsWrapper>
        </>
      )}
    </Screen>
  );
}
