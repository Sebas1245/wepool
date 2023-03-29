import React from 'react'
import { TouchableOpacity, Image, StyleSheet, GestureResponderEvent } from 'react-native'
// import { getStatusBarHeight } from 'react-native-status-bar-height'

type btnProps = {
  size?: string,
  onPress: (event: GestureResponderEvent) => void
  props?: any   //Cannot redefined 'any' because of its usage on later component
}

export const  BackButton = ({size, onPress, props}: btnProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} {...props}>
      <Image
        style={styles.image}
        source={require('../assets/icons/arrow_back.png')}
      />
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