import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import {Logo} from '../../components/Logo'
import {Header} from '../../components/Header'
import {Button} from '../../components/Button'
import {LoginTextInput} from '../../components/LoginTextInput'
import {BackButton} from '../../components/BackButton'
import { RootStackScreenProps } from '../../navigation/types';
import { AuthContext, AuthenticatedUser } from '../../AuthContext'
import { useLazyQuery, useMutation } from '@apollo/client'
import { createOneUser } from '../../mutations/createOneUser'
import { findFirstUserWithEmail } from '../../queries/findFirstUserWithEmail'
import { GET_USERS_ORDERED_ID } from '../../queries/GET/UserQueries'

const screen = Dimensions.get('window')
const logoWidth = (screen.width * 0.9)

export const SignUpScreen = ({navigation}: RootStackScreenProps<'SignUpScreen'>) => {
  const context = useContext(AuthContext);
  const [createOneUserMutation, mutationResult] = useMutation(createOneUser);
  const [findFirstUserWithEmailQuery, queryResult] = useLazyQuery(
    findFirstUserWithEmail
  );
  const [findLastUserId, lastUserId] = useLazyQuery(
    GET_USERS_ORDERED_ID
  );
  // Form variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');


  const checkIfUserExists = async () => {
    // Primero accionar la query
    const queryResult = await findFirstUserWithEmailQuery({
      variables: {
        where: {
          email: {
            equals: email,
          },
        },
      },
    });
    if (queryResult.data && queryResult.data.findFirstUser) {
      const { id, email, fname, lname } = queryResult.data.findFirstUser;
      context?.setAuthenticatedUser({ id, email, fname, lname, accessToken: null });
    } else {
      createNewUser();
    }
  };

  const createNewUser = async () => {
    const mutationResult = await createOneUserMutation({
      variables: {
        data: {
          email: email,
          fname: name,
          lname: lastname,
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
      context?.setAuthenticatedUser({ id, email, fname, lname, accessToken: null });
    } else {
      console.error();
      //Agregar una pantall Oops o algo
    }
  };

  async function handleSignUp(){
    checkIfUserExists()
    navigation.navigate('Root')
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style = {{marginTop:50}}>
        <Logo style={styles.logoStyle} />
      </View>
      <Header text='Create your profile'/>
      <LoginTextInput
        label="Email"
        placeholder='Enter your email'
        onChangeText={(emailText: string) => setEmail(emailText)}
      />
      <LoginTextInput
        label="Name"
        placeholder='Enter your first name'
        onChangeText={(nameText: string) => setName(nameText)}
      />
      <LoginTextInput
        label="Last name"
        placeholder='Enter your last name'
        onChangeText={(lnameText: string) => setLastname(lnameText)}
      />
      <LoginTextInput
        label="Password"
        props={{'secureTextEntry': true}}
        onChangeText={(pwdText: string) => setPassword(pwdText)}
      />
      <LoginTextInput
        label="Confirm Password"
        props={{'secureTextEntry': true}}
        onChangeText={(confirmText: string) => setPasswordConfirm(confirmText)}
      />
      <Button text='Sign in' onPress={() => handleSignUp()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 35,
    marginTop: 35
  },
  backButton: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
  },
  logoStyle: {
    resizeMode: 'contain',
    width: logoWidth,
    height: (logoWidth / 2.5),
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
}
)