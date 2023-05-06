import React from 'react'
import { TouchableOpacity, Image, StyleSheet, GestureResponderEvent } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
// import { getStatusBarHeight } from 'react-native-status-bar-height'

type btnProps = {
  size?: string,
  onPress: (event: GestureResponderEvent) => void
  props?: any   //Cannot redefined 'any' because of its usage on later component
}

export const  BackButton = ({size, onPress, props}: btnProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} {...props}>
      <FontAwesome name="arrow-left" size={32} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 35,
    height: 35,
  },
})