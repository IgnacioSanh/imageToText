module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@theme': './src/theme',
          '@components': './src/components',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '~utils': './src/utils',
          '~types': './src/types',
          '~store': './src/store',
          '~mocks': './src/mocks',
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
};
