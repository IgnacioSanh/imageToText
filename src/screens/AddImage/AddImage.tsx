import React, { useState } from 'react';

import { Image, ActivityIndicator } from 'react-native';

import { Screen, Button } from '@components';
import { H1, StandardFont } from '@theme';
import { PhoneImageUtil, ImageProcessorUtil } from '~utils';

export default function AddImage() {
  const [imageUri, setImageUri] = useState<string>();
  const [translation, setTranslation] = useState<string>();
  const [loading, setLoading] = useState(false);

  async function openGallery() {
    setImageUri(await PhoneImageUtil.pickImageFromGallery());
  }

  async function pressTranslate() {
    setLoading(true);
    const textResult = await ImageProcessorUtil.imageToText(imageUri!);
    setTranslation(textResult);
    setLoading(false);
  }

  return (
    <Screen>
      <H1>Detail</H1>
      <Button label="Show image picker" onPress={openGallery} />
      {imageUri && (
        <>
          <Image
            source={{ uri: imageUri }}
            resizeMode="contain"
            style={{ height: 300, width: 300 }}
          />
          <Button label="translate" onPress={pressTranslate} />
          {loading ? (
            <ActivityIndicator />
          ) : (
            <StandardFont>{translation}</StandardFont>
          )}
        </>
      )}
    </Screen>
  );
}
