module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
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
        },
      },
    ],
  ],
};
