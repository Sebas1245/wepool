import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import {Logo} from '../../components/Logo'
import {Header} from '../../components/Header'
import {Button} from '../../components/Button'
import {LoginTextInput} from '../../components/LoginTextInput'
import {BackButton} from '../../components/BackButton'
import { RootStackScreenProps } from '../../navigation/types';

const screen = Dimensions.get('window')
const logoWidth = (screen.width * 0.9)

export const SignUpScreen = ({navigation}: RootStackScreenProps<'SignUpScreen'>) => {

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
      />
      <LoginTextInput
        label="Password"
        props={{'secureTextEntry': true}}
      />
      <LoginTextInput
        label="Confirm Password"
        props={{'secureTextEntry': true}}
      />
      <Button text='Sign in' onPress={() => navigation.navigate('SelectProfile')}/>
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