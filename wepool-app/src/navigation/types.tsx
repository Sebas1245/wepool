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
    RideDisplay: undefined;
    RideDetails: undefined;
  };
  
export type RootStackScreenProps<ScreenName extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, ScreenName>;
  
// export type StartScreenParamList = {
//     StartScreen: undefined;
//     Latest: undefined;
//     };
// export type StartScreenProps<T extends keyof StartScreenParamList> =
//     CompositeScreenProps<
//       BottomTabScreenProps<StartScreenParamList, T>,
//       RootStackScreenProps<keyof RootStackParamList>
//     >;
export type HomeTabParamList = {
    Popular: undefined;
    Latest: undefined;
  };
  
export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
    CompositeScreenProps<
      BottomTabScreenProps<HomeTabParamList, T>,
      RootStackScreenProps<keyof RootStackParamList>
    >;
  
declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }