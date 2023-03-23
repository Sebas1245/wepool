import React, {useState} from 'react'
import { View, SafeAreaView, StyleSheet, Text, TextInput as Input } from 'react-native'
import Colors from '../core/Colors'

type Props = {
    label? : string,
    placeholder?: string,
    errorText?: string, 
    description?: string,
    props?: any
}

export default function LoginTextInput({label,placeholder, errorText, description, props}: Props) {
    // const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
        {label ? (
            <Text style= {styles.text}>{label}</Text>
            ) : null}
        <Input       
            style={styles.input}
            // value= {text}
            // onChangeText= {onChangeText}
            placeholder= {placeholder}
            selectionColor={Colors.light.colors.secondary}
            {...props}
            
        />
      {/* {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null} */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 15,
  },
  description: {
    fontSize: 13,
    color: Colors.light.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: Colors.light.colors.error,
    paddingTop: 8,
  },
  text: {
    fontSize: 22,
    color: Colors.light.colors.text,
    paddingVertical: 12,
  },
})
