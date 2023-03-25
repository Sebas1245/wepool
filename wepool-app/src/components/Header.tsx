import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Theme from '../core/Colors'

type Props = {
  text: string;
}

export default function Header({text}: Props) {
  return <Text style = {styles.header}> {text} </Text>
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    color: Theme.light.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
