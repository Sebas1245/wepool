import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useThemeColors } from "../hooks/useThemeColors";

type Props = {
  text: string,
  size?: number,
}

export const  Header = ({text, size}: Props)  => {
  const { colors } = useThemeColors();
  return <Text style = {[styles.header, {color: colors.colors.primary, fontSize: size?? 35}]}> {text} </Text>
}

const styles = StyleSheet.create({
  header: {
    // fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
