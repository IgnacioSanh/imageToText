import React, { createContext, useContext, useState } from 'react';
import { ImageStoreContext, SavedImage } from '~types';

interface ImageProviderProps {
  children: React.ReactNode;
}

const imageContextInitialState: ImageStoreContext = {
  images: [],
  setImages: () => undefined,
};

export const imageContext = createContext<ImageStoreContext>(
  imageContextInitialState,
);

export default function ImageProvider({ children }: ImageProviderProps) {
  const [images, setImages] = useState<SavedImage[]>([]);

  return (
    <imageContext.Provider value={{ images, setImages }}>
      {children}
    </imageContext.Provider>
  );
}

export const useImageProvider = () => {
  const context = useContext(imageContext);
  if (context === undefined) {
    throw new Error('imageContext must be used within an imageProvider');
  }
  return context;
};
