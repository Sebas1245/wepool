/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";


import Colors from '../core/Colors';
import {useColorScheme} from '../hooks/useColorScheme';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "./types";
import LinkingConfiguration from './LinkingConfiguration';
import { StartScreen } from '../screens/StartScreens/StartScreen';
import { LoginScreen } from '../screens/StartScreens/LoginScreen';
import { SignUpScreen } from '../screens/StartScreens/SignUpScreen';
import { SelectProfile } from '../screens/SelectProfile';
import { RideDisplay } from '../screens/RideDisplay';
import { SearchRide } from '../screens/SearchRide';
import CreateNewRide from '../screens/CreateNewRide';
import EditRide from '../screens/EditRide';
import { MatchedDrivers } from '../screens/MatchedDrivers';
import { Profile } from '../screens/Profile';
import { MyRides } from "../screens/MyRides";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="StartScreen">
      {/* START SCREENS */}
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectProfile"
        component={SelectProfile}
        options={{ headerShown: false }}
      />
      {/* MAIN TAB NAVIGATOR SCREEN */}
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* SECONDARY SCREENS INSIDE TAB FUNCTIONALITIES */}
      <Stack.Screen
        name="MatchedDrivers"
        component={MatchedDrivers}
        options={{ headerShown: false, animationTypeForReplace: "pop" }}
      />
      <Stack.Screen 
        name="EditRide" 
        component={EditRide} 
        options={{headerShown: false}} 
      />
      <Stack.Screen 
        name="CreateNewRide" 
        component={CreateNewRide} 
        options={{headerShown: false}} 
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={RideDisplay}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="SearchRide"
        component={SearchRide}
        options={({ navigation }: RootTabScreenProps<"SearchRide">) => ({
          title: "Search",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("SearchRide")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="MyRides"
        component={MyRides}
        options={({ navigation }: RootTabScreenProps<"MyRides">) => ({
          title: "My Rides",
          tabBarIcon: ({ color }) => <TabBarIcon name="car" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("MyRides")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }: RootTabScreenProps<"Profile">) => ({
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-circle" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Profile")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            ></Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
