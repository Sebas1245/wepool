import React, { useState } from 'react'
import { Dimensions, TouchableOpacity, StyleSheet, View, SafeAreaView } from 'react-native'
import Text from '../../components/Text'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import LoginTextInput from '../../components/LoginTextInput'
import BackButton from '../../components/BackButton'
import Theme from '../../core/Colors'
import { RootStackScreenProps } from '../../navigation/types';
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'

const screen = Dimensions.get('window')
const logoWidth = (screen.width * 0.9)

const logoStyle = {
      resizeMode: 'contain',
      width: logoWidth,
      height: (logoWidth / 2.5),
}

export default function SignUpScreen({navigation}: RootStackScreenProps<'SignUpScreen'>) {
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

  return (
    <View style = {styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style = {{marginTop:50}}>
        <Logo style={logoStyle} />
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
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
}
)