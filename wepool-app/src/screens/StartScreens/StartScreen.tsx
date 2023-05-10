import React, { useEffect, useState, useContext } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { Logo } from "../../components/Logo";
import { Header } from "../../components/Header";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { RootStackScreenProps } from "../../navigation/types";
import {
  webClientId,
  iosClientId,
  androidClientId,
  localWebClientId,
} from "../../../clientIds";
import { AuthContext, AuthenticatedUser } from "../../AuthContext";
import { useLazyQuery, useMutation } from "@apollo/client";
import { findFirstUserWithEmail } from "../../queries/findFirstUserWithEmail";
import { createOneUser } from "../../mutations/createOneUser";

WebBrowser.maybeCompleteAuthSession();

export const StartScreen = ({
  navigation,
}: RootStackScreenProps<"StartScreen">) => {
  const context = useContext(AuthContext);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthenticatedUser | null>(null);
  const [_, response, promptAsync] = Google.useAuthRequest({
    clientId: webClientId,
    iosClientId,
    androidClientId,
    webClientId: localWebClientId,
  });
  const [findFirstUserWithEmailQuery, queryResult] = useLazyQuery(
    findFirstUserWithEmail
  );
  const [createOneUserMutation, mutationResult] = useMutation(createOneUser);

  const fetchUserInformation = async () => {
    console.log("Fetching user information. Access token -> ", accessToken);
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = await response.json();
    // TODO: Add this user info to context
    return {
      id: userInfo.id,
      fname: userInfo.given_name,
      lname: userInfo.family_name,
      email: userInfo.email,
      accessToken,
    };
  };

  const checkIfUserExists = async (authenticatedUser: AuthenticatedUser) => {
    // Primero accionar la query
    const queryResult = await findFirstUserWithEmailQuery({
      variables: {
        where: {
          email: {
            equals: authenticatedUser.email,
          },
        },
      },
    });
    if (queryResult.data && queryResult.data.findFirstUser) {
      const { id, email, fname, lname } = queryResult.data.findFirstUser;
      context?.setAuthenticatedUser({ id, email, fname, lname, accessToken });
    } else if (!queryResult.data.findFirstUser) {
      createNewUser(authenticatedUser);
    } else {
      context?.setAuthenticatedUser(authenticatedUser);
    }
  };

  const createNewUser = async (authenticatedUser: AuthenticatedUser) => {
    const mutationResult = await createOneUserMutation({
      variables: {
        data: {
          email: authenticatedUser.email,
          fname: authenticatedUser.fname,
          lname: authenticatedUser.lname,
          company: {
            connect: {
              id: 1,
            },
          },
        },
      },
    });
    if (mutationResult.data && mutationResult.data.createOneUser) {
      const { id, email, fname, lname } = mutationResult.data.createOneUser;
      context?.setAuthenticatedUser({ id, email, fname, lname, accessToken });
    } else {
      context?.setAuthenticatedUser(authenticatedUser);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication?.accessToken ?? "");
      accessToken &&
        fetchUserInformation()
          .then((user) => {
            console.log(user);
            checkIfUserExists(user);
          })
          .catch((err: any) => console.log(err))
          .finally(() => navigation.navigate("Root"));
    }
  }, [response, accessToken]);

  return (
    <View style={styles.container}>
      <Logo />
      <Header text="Welcome!"></Header>
      {/* Comment the following line to deactivate login */}
      {queryResult.loading || mutationResult.loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={() => promptAsync()}
        >
          {/* <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5} onPress={() => navigation.navigate('SelectProfile')}> */}
          <Image
            source={require("../../assets/img/google_logo.png")}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Login Using Google</Text>
        </TouchableOpacity>
      )}
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4285F4",
    borderWidth: 0.5,
    borderColor: "#fff",
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
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
});
