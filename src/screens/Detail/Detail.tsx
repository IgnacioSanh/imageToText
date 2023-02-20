import React, { useState } from 'react';
import axios from 'axios';

import { Image } from 'react-native';

import { Screen, Button } from '@components';
import { H1 } from '@theme';
import { PhoneImageUtil } from '~utils';

export default function Detail() {
  const [imageUri, setImageUri] = useState<string>();

  async function openGallery() {
    setImageUri(await PhoneImageUtil.pickImageFromGallery());
  }

  async function imageToText() {
    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      name: 'image',
      type: 'image/jpeg',
    });
    const result = await axios.post(
      'https://api.api-ninjas.com/v1/imagetotext',
      formData,
      {
        headers: { 'X-Api-Key': 'V16CVG4OUBL+mJ41VKqfZQ==5GtmEFnm58ofIm0L' },
      },
    );
    console.log(result.data);
  }

  return (
    <Screen>
      <H1>Detail</H1>
      <Button label="Show image picker" handlePress={openGallery} />
      {imageUri && (
        <>
          <Image
            source={{ uri: imageUri }}
            resizeMode="contain"
            style={{ height: 300, width: 300 }}
          />
          <Button label="translate" handlePress={imageToText} />
        </>
      )}
    </Screen>
  );
}
