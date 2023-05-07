import React, { useEffect, useState, useContext } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { Logo } from "../../components/Logo";
import { Header } from "../../components/Header";
import { Button, ImageButton } from "../../components/Button";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { RootStackScreenProps } from "../../navigation/types";
import { webClientId, iosClientId, androidClientId } from "../../../clientIds";
import { User } from "../../AuthContext";

export const StartScreen = ({
  navigation,
}: RootStackScreenProps<"StartScreen">) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: webClientId,
    iosClientId,
    androidClientId,
  });
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response?.authentication?.accessToken ?? "");
      accessToken && fetchUserInformation();
      navigation.navigate('SelectProfile');
    }
  }, [response, accessToken]);
  const fetchUserInformation = async () => {
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = await response.json();
    // TODO: Add this user info to context
    const authenticatedUser: User = { name: userInfo.name, email: userInfo.email };
    setUser(authenticatedUser);
  };
  const buttonImage = () => (
    <Image source={require("../../assets/img/google_logo.png")} style={styles.image} />
  );
  return (
    <View style={styles.container}>
      <Logo />
      <Header text="Welcome!"></Header>
      {/* Comment the following line to deactivate login */}
      <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5} onPress={() => promptAsync()}>
      {/* <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5} onPress={() => navigation.navigate('SelectProfile')}> */}
          <Image
            source={require("../../assets/img/google_logo.png")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Login Using Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
    paddingRight: 10,
  },
  buttonImageIconStyle: {
    padding: 1,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});
