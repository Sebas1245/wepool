import React, { useState } from 'react'
import { Dimensions, TouchableOpacity, StyleSheet, View, SafeAreaView } from 'react-native'
import Text from '../../components/Text'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import BackButton from '../../components/BackButton'
import Theme from '../../core/Colors'
import { RootStackScreenProps } from '../../navigation/types';
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'

const screen = Dimensions.get('window')
const logoWidth = (screen.width * 0.9)

const logoStyle = {
      resizeMode: 'contain',
      width: logoWidth - 15,
      height: (logoWidth / 2.5),
}

export default function LoginScreen({navigation}: RootStackScreenProps<'LoginScreen'>) {
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
      <Header text='Welcome back.'/>
      <TextInput
        label="Email"
        placeholder='User email'
        // returnKeyType="next"
        // value={email.value}
        // onChangeText={(text) => setEmail({ value: text, error: '' })}
        // error={!!email.error}
        // errorText={email.error}
        // autoCapitalize="none"
        // autoCompleteType="email"
        // textContentType="emailAddress"
        // keyboardType="email-address"
      />
      <TextInput
        label="Password"
        // isPassword = {true}
        props={{'secureTextEntry': true}}
        // returnKeyType="done"
        // value={password.value}
        // onChangeText={(text) => setPassword({ value: text, error: '' })}
        // error={!!password.error}
        // errorText={password.error}
        // secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
        //   onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
        <Text text='Forgot your password?'/>
      </TouchableOpacity>
      </View>
      <Button text='Login'/>
      <View style={styles.row}>
        <Text text='Don’t have an account?'/>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text text = 'Sign up'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 35,
    marginTop: 35,
    marginBottom: 10,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: Theme.light.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: Theme.light.colors.primary,
  },
})