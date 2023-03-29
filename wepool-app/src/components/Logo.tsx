import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'

type Props = {
  style?: any
}

export const Logo = ({style} : Props) => {
  return <Image source={require('../assets/img/logo.png')} style={ style ? style : styles.image} />
}

const screen = Dimensions.get('window')
const logoWidth = (screen.width * 0.9)

const styles = StyleSheet.create({
    image: {
      resizeMode: 'contain',
      width: logoWidth,
      height: (logoWidth / 2.5),
      marginLeft: 25,
      marginBottom: 25, 
      marginTop: 50
      
      // borderColor: theme.colors.text, 
      // borderWidth: 2
    },
  })