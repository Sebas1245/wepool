import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { theme } from '../core/theme'

type Props = {
  text: string;
}

export default function Header({text}: Props) {
  return <Text style = {styles.header}> {text} </Text>
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
