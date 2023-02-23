import { launchImageLibrary } from 'react-native-image-picker';

async function pickImageFromGallery(): Promise<string | undefined> {
  const result = await launchImageLibrary({ mediaType: 'photo' });
  if (result.assets) {
    console.log(result.assets);
    return result.assets[0].uri;
  }
}

export default {
  pickImageFromGallery,
};
