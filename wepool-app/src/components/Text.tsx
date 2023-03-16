import React from 'react'
import { StyleSheet, Text as NativeText } from 'react-native'
import { theme } from '../core/theme'

type Props = {
  text: string;
}

export default function Text({text}: Props) {
  return <NativeText style = {styles.paragraph}> {text} </NativeText>
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 22,
    color: theme.colors.text,
    paddingVertical: 12,
  },
})