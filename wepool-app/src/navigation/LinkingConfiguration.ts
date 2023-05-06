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
      Root: {
        screens: {
          Home: {
            screens: {
              RideDisplay: 'RideDisplay',
            },
          },
          SearchRide: {
            screens: {
              SearchRide: 'SearchRide',
              MatchedDrivers: ' MatchedDrivers',
            },
          },
          MyRides: {
            screens: {
              MyRides: 'MyRides',
              EditRide: 'EditRide',
              CreateNewRide: 'CreateNewRide',
            },
          },
          Profile: {
            screens: {
              Profile: 'Profile',
            },
          },
        },
      },
    },
  },
};

export default linking;
