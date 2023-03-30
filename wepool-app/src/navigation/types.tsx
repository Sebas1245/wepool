import type {
    CompositeScreenProps,
    NavigatorScreenParams,
  } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
  
export type RootStackParamList = {
    StartScreen: undefined;
    LoginScreen: undefined;
    SignUpScreen: undefined;
    SelectProfile: undefined;
    MatchedDrivers: undefined;
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
  };
  
  export type RootStackScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;
  
  
  export type RootTabParamList = {
    Home: undefined;
    RideDetails: undefined;
    RideDisplay: undefined;
    CreateRide: undefined;
    SearchRide: undefined;
    MyRides: undefined;
    Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
  
declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }