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
  const result = await axios.post<
    FormData,
    AxiosResponse<ImageProcessorResponse[]>
  >(`${API_NINJA_URL}/v1/imagetotext`, formData, {
    headers: { 'X-Api-Key': `${API_NINJA_API_KEY}` },
  });
  return result.data.reduce((prev, curr) => `${prev} ${curr.text}`, '');
}

export default {
  imageToText,
};
