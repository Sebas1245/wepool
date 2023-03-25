import React, {useState} from 'react'
import { View, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import Colors from '../core/Colors'

type Props = {
}

export default function SearchBar() {
    // const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
        <TouchableOpacity style = {styles.iconContainer}>
            <Image
                style={styles.icon}
                source={require('../assets/icons/icon_Search.png')}
                />
        </TouchableOpacity>
        <TextInput
            style={styles.input}
            placeholder= 'Search'
            selectionColor={Colors.light.colors.secondary}           
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  iconContainer: {
    flex: 1,
  },
  icon: {
    flex: 1,
    resizeMode: 'contain',
    width: '70%' ,
    height: '70%',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  input: {
    flex: 4,
  },
  text: {
    fontSize: 22,
    color: Colors.light.colors.text,
    paddingVertical: 12,
  },
})