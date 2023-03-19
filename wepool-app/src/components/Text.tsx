import React from 'react'
import { StyleSheet, Text as NativeText } from 'react-native'
import Theme from '../core/Colors'

type Props = {
  text: string;
}

export default function Text({text}: Props) {
  return <NativeText style = {styles.paragraph}> {text} </NativeText>
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 22,
    color: Theme.light.colors.text,
    paddingVertical: 12,
  },
})