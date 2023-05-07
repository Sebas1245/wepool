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
    MatchedDrivers: undefined;
    EditRide: {
      rides?: Ride[], 
      cardId: number
    };
    CreateNewRide: undefined;
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
  };
  
  export type RootStackScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;
  
  
  export type RootTabParamList = {
    Home: undefined;
    MyRides: undefined;
    SearchRide: undefined;
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