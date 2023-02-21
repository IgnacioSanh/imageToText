import React from 'react';

import { Screen, Button } from '@components';
import { H1, StandardFont } from '@theme';
import { useImageProvider } from '~store/imageProvider';
import { SavedImage } from '~types';

export default function Detail() {
  const { images, setImages } = useImageProvider();

  const addImage = () => {
    const newImage: SavedImage = {
      name: 'New image',
      originalWidth: 100,
      originHeight: 100,
      uri: 'aaa',
    };
    setImages(prevImages => [...prevImages, newImage]);
  };

  return (
    <Screen>
      <H1>Detail</H1>
      {images.map((image, idx) => (
        <StandardFont key={image.name + idx}>{image.name}</StandardFont>
      ))}
      <Button label="Show image picker" onPress={addImage} />
    </Screen>
  );
}
