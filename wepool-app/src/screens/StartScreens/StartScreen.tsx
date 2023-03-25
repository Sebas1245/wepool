import React from 'react'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { View, StyleSheet, Text } from 'react-native'
import { RootStackScreenProps } from '../../navigation/types';


export default function StartScreen({navigation}: RootStackScreenProps<'StartScreen'>) {
  return (
    <View style = {styles.container}>
        <Logo />
        <Header text='Welcome!'></Header>
        <Text>Sign or log in</Text>
        <Button
            text="Login"
            onPress={() => navigation.navigate('LoginScreen')}
        />
        <Button
            text="Sign up"
            onPress={() => navigation.navigate('SignUpScreen')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
})
