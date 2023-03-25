/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from './types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      StartScreen: 'StartScreen',
      LoginScreen: 'LoginScreen',
      SignUpScreen: 'SignUpScreen',
      SelectProfile: 'SelectProfile',
      // RideDisplay: 'RideDisplay',
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'RideDetails',
            },
          },
          CreateRide: {
            screens: {
              CreateRide: 'CreateNewRide',
            },
          },
          RideDisplay: {
            screens: {
              RideDisplay: 'RideDisplay',
            },
          },
        },
      },
    },
  },
};

export default linking;
