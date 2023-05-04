import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useThemeColors } from "../hooks/useThemeColors";

type Props = {
  text?: string;
}

export const  Oops = ({text}: Props)  => {
  const { colors } = useThemeColors();
  return <Text style = {[styles.header, {color: colors.colors.error}]}> {text ? text : "Oops! Something happened. Please try again"} </Text>
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 12,

  },
})
