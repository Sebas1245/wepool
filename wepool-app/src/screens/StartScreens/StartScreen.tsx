import React from 'react'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import Text from '../../components/Text'
import { RootStackScreenProps } from '../../navigation/types';


export default function StartScreen({navigation}: RootStackScreenProps<'StartScreen'>) {
  return (
    <View style = {styles.container}>
        <Logo />
        <Header text='Welcome!'></Header>
        <Text text='Sign or log in'/>
        <Button
            text="Login"
            onPress={() => navigation.navigate('LoginScreen')}
        />
        <Button
            text="Sign up"
            // onPress={() => navigation.navigate('RegisterScreen')}
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
