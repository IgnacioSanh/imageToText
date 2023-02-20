export enum ScreenNames {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
}

export type RootNavigatorParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.DETAIL]: undefined;
};
