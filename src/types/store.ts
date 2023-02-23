import { Dispatch, SetStateAction } from 'react';

export interface SavedImage {
  name: string;
  uri: string;
  text: string;
  translation: string;
  date: Date;
}

export interface ImageStoreContext {
  images: SavedImage[];
  setImages: Dispatch<SetStateAction<SavedImage[]>>;
}
