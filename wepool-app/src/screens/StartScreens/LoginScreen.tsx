import React, { useState } from 'react'
import { Dimensions, TouchableOpacity, StyleSheet, View, Text} from 'react-native'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import LoginTextInput from '../../components/LoginTextInput'
import BackButton from '../../components/BackButton'
import Theme from '../../core/Colors'
import { RootStackScreenProps } from '../../navigation/types';
import Colors from '../../core/Colors'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'

const screen = Dimensions.get('window')
const logoWidth = (screen.width * 0.9)

export default function LoginScreen({navigation}: RootStackScreenProps<'LoginScreen'>) {
  const [user, setUser] = useState<User>({
    _id: 1,
    name: 'Bernardo',
    lastname: 'Garcia', 
    email: 'bernardo@gmail.com', 
    password: '1234', 
    phoneNumber: '1234'
  });

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
      <View style = {styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style = {{marginTop:50}}>
        <Logo style={styles.logoStyle} />
      </View>
      <Header text='Welcome back.'/>
      <LoginTextInput
        label="Email"
        placeholder='User email'
        props={{
          'value': user ? user.email : null,
          'onChangeText': (text: string) => setUser( prev => {return { ...prev, email: text}}),
          'returnKeyType': "next",
          'autoCapitalize': "none",
          'autoCompleteType': "email",
          'textContentType': "emailAddress",
        }}
        // onChangeText={(text) => setEmail({ value: text, error: '' })}
        // error={!!email.error}
        // errorText={email.error}
        // keyboardType="email-address"
      />
      <LoginTextInput
        label="Password"
        props={{
          'secureTextEntry': true, 
          'value': user ? user.email : null,
        }}
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
        <Text style = {styles.text}>'Forgot your password</Text>
      </TouchableOpacity>
      </View>
      <Button text='Login' onPress={() => navigation.navigate('SelectProfile')}/>
      <View style={styles.row}>
        <Text style={styles.text}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.text}>Sign up</Text>
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
  text: {
    fontSize: 22,
    color: Colors.light.colors.text,
    paddingVertical: 12,
  },
})