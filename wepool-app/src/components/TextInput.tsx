import React, {useState} from 'react'
import { View, SafeAreaView, StyleSheet, TextInput as Input } from 'react-native'
import Text from './Text'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { theme } from '../core/theme'

type Props = {
    label? : string,
    placeholder?: string,
    errorText?: string, 
    description?: string,
    props?: any
}

export default function TextInput({label,placeholder, errorText, description, props}: Props) {
    const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
        {label ? (
            <Text text= {label}/>
            ) : null}
        <Input       
            style={styles.input}
            value= {text}
            onChangeText= {onChangeText}
            placeholder= {placeholder}
            selectionColor={theme.colors.secondary}
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
      borderColor: Colors.black,
      borderWidth: 2,
      borderRadius: 15,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
