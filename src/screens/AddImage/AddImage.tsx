import React, { useState } from 'react';

import { Image } from 'react-native';
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages';
import { faCameraAlt } from '@fortawesome/free-solid-svg-icons/faCameraAlt';

import { Screen, Button } from '@components';
import { StandardBoldFont } from '@theme';
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
  const [imageUri, setImageUri] = useState<string>();
  const [imageText, setImageText] = useState<string>();
  const [translation, setTranslation] = useState<string>();
  const [imageName, setImageName] = useState<string>();

  const { images, setImages } = useImageProvider();

  async function openGallery() {
    const imageUriResponse = await PhoneImageUtil.pickImageFromGallery();
    setImageUri(imageUriResponse);
    const imageTextResponse = MOCK_TEXT
      ? 'This is complicated'
      : await ImageProcessorUtil.imageToText(imageUriResponse!);
    setImageText(imageTextResponse);
    const translatedText = MOCK_TEXT
      ? 'Esto es complicado'
      : await TranslatorUtil.translate(imageTextResponse);
    setTranslation(translatedText);
  }

  function saveImage() {
    const newImage: SavedImage = {
      date: new Date(),
      name: imageName!,
      text: imageText!,
      translation: translation!,
      uri: imageUri!,
    };
    setImages([...images, newImage]);
    navigation.goBack();
  }

  return (
    <Screen>
      {imageUri ? (
        <>
          <Image
            source={{ uri: imageUri }}
            resizeMode="contain"
            resizeMethod="scale"
            style={{ flex: 1, maxHeight: 300, backgroundColor: 'gray' }}
          />
          <ImageTextTranslation
            original={imageText}
            translation={translation}
          />
          <StandardBoldFont>Image name</StandardBoldFont>
          <Input
            placeholder="Enter the name of the image"
            onChangeText={text => setImageName(text)}
          />

          <Button
            label="Save"
            onPress={saveImage}
            enabled={!!imageUri && !!imageText && !!translation && !!imageName}
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
