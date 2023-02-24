import { SavedImage } from './store';

export interface DateSection {
  title: string;
  data: readonly SavedImage[];
}
