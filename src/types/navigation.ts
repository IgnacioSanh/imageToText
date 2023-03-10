export enum ScreenNames {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
  ADD_IMAGE = 'ADD_IMAGE',
}

export type RootNavigatorParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.DETAIL]: { id: string };
  [ScreenNames.ADD_IMAGE]: undefined;
};
