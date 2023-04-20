import React, { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { Logo } from "../../components/Logo";
import { Header } from "../../components/Header";
import { Button, ImageButton } from "../../components/Button";
import { View, StyleSheet, Text, Image } from "react-native";
import { RootStackScreenProps } from "../../navigation/types";
import { webClientId, iosClientId, androidClientId } from "../../../clientIds";

export const StartScreen = ({
  navigation,
}: RootStackScreenProps<"StartScreen">) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<unknown>(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: webClientId,
    iosClientId,
    androidClientId,
  });
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response?.authentication?.accessToken ?? "");
      accessToken && fetchUserInformation();
    }
  }, [response, accessToken]);
  const fetchUserInformation = async () => {
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = await response.json();
    setUser(userInfo);
  };
  const buttonImage = () => (
    <Image source={require("../../assets/img/google_logo.png")} />
  );
  return (
    <View style={styles.container}>
      <Logo />
      <Header text="Welcome!"></Header>
      <Button text="Sign in with Google" onPress={() => promptAsync()} />
      {/* <ImageButton
            Image={buttonImage}
            onPress={() => promptAsync()}
        /> */}
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
});
