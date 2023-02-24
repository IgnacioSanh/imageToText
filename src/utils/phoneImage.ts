import { PermissionsAndroid } from 'react-native';
import {
  launchImageLibrary,
  Asset,
  launchCamera,
} from 'react-native-image-picker';

async function pickImageFromGallery(): Promise<Asset | undefined> {
  const result = await launchImageLibrary({ mediaType: 'photo' });
  if (result.assets && result.assets.length > 0) {
    return result.assets[0];
  } else {
    throw new Error('An error ocurred when picking an image');
  }
}

async function takePicture(): Promise<Asset | undefined> {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    {
      title: 'App Camera Permission',
      message: 'App needs access to your camera ',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    const result = await launchCamera({ mediaType: 'photo' });
    if (result.assets && result.assets.length > 0) {
      return result.assets[0];
    }
    throw new Error('An error ocurred while taking the picture');
  } else {
    throw new Error('Permisions were denied');
  }
}

export default {
  pickImageFromGallery,
  takePicture,
};
