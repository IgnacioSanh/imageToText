import 'react-native/jest/setup';
import 'react-native-gesture-handler/jestSetup';

import { jest } from '@jest/globals';

jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: () => {},
    useRoute: () => ({
      name: 'HOME',
    }),
    useNavigation: () => ({
      navigate: () => {},
      replace: () => {},
      setOptions: () => {},
    }),
  };
});

jest.mock('@fortawesome/react-native-fontawesome', () => {
  const React = require('react');
  const IconMock = ({ children, ...props }) =>
    React.createElement('svg', props, children);
  return { FontAwesomeIcon: IconMock };
});
