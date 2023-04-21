import React, { useEffect, useState } from "react";
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { Logo } from "../../components/Logo";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { LoginTextInput } from "../../components/LoginTextInput";
import { BackButton } from "../../components/BackButton";
import { RootStackScreenProps } from "../../navigation/types";
import Colors from "../../core/Colors";
import { webClientId, iosClientId, androidClientId } from "../../../clientIds";


// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
import _testUsers from "../../TestDummyUsers.json";

const screen = Dimensions.get("window");
const logoWidth = screen.width * 0.9;

WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = ({
  navigation,
}: RootStackScreenProps<"LoginScreen">) => {
  /**
   * Getting dummy users info for testing purposes.
   * TODO:
   *  - Integrate with backend
   *  - Functionality and  implementation
   *  - A variable 'email' is missing
   *  - Create a function to update user array
   *  - Erase template comments
   *
   */

  //   const [email, setEmail] = useState({ value: '', error: '' })
  //   const [password, setPassword] = useState({ value: '', error: '' })

  //   const onLoginPressed = () => {
  //     const emailError = emailValidator(email.value)
  //     const passwordError = passwordValidator(password.value)
  //     if (emailError || passwordError) {
  //       setEmail({ ...email, error: emailError })
  //       setPassword({ ...password, error: passwordError })
  //       return
  //     }
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: 'Dashboard' }],
  //     })
  //   }

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

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={{ marginTop: 50 }}>
        <Logo style={styles.logoStyle} />
      </View>
      <Text>Welcome</Text>
      <Button
        text="Login"
        onPress={() => navigation.navigate("SelectProfile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 35,
    marginTop: 35,
    marginBottom: 10,
  },
  backButton: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
  },
  logoStyle: {
    resizeMode: "contain",
    width: logoWidth,
    height: logoWidth / 2.5,
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  text: {
    fontSize: 22,
    color: Colors.light.text,
    paddingVertical: 12,
  },
});
