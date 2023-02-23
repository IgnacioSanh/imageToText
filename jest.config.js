module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(react-navigation|@react-navigation/.*|react-native-svg|@fortawesome|jest-runner)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFiles: ['./jestSetup.js'],
};
