import { Dispatch, SetStateAction } from 'react';

export interface SavedImage {
  name: string;
  uri: string;
  originalWidth: number;
  originHeight: number;
  text?: string;
  translation?: string;
}

export interface ImageStoreContext {
  images: SavedImage[];
  setImages: Dispatch<SetStateAction<SavedImage[]>>;
}
