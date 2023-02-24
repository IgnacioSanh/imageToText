import { launchImageLibrary, Asset } from 'react-native-image-picker';

async function pickImageFromGallery(): Promise<Asset | undefined> {
  const result = await launchImageLibrary({ mediaType: 'photo' });
  if (result.assets && result.assets.length > 0) {
    return result.assets[0];
  } else {
    throw new Error('An error ocurred when picking an image');
  }
}

export default {
  pickImageFromGallery,
};
