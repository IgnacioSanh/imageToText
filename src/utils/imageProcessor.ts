import axios, { AxiosResponse } from 'axios';
import { API_NINJA_URL, API_NINJA_API_KEY } from '@env';
import { ImageProcessorResponse } from '~types';

async function imageToText(imageUri: string, imageName = 'image') {
  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    name: imageName,
    type: 'image/jpeg',
  });
  try {
    const result = await axios.post<
      FormData,
      AxiosResponse<ImageProcessorResponse[]>
    >(`${API_NINJA_URL}/v1/imagetotext`, formData, {
      headers: {
        'X-Api-Key': `${API_NINJA_API_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return result.data.reduce((prev, curr) => `${prev} ${curr.text}`, '');
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export default {
  imageToText,
};
