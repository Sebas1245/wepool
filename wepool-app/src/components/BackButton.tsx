import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
// import { getStatusBarHeight } from 'react-native-status-bar-height'

type btnProps = {
  size?: string,
  onPress?: (params?: any) => any;
  props?: any
}

export default function BackButton({size, onPress, props}: btnProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} {...props}>
      <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 4,
  },
  image: {
    // flex: 1, 
    // alignContent: 'flex-start',
    // justifyContent: 'flex-start',
    width: 35,
    height: 35,
  },
})