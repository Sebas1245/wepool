import React, { useState } from 'react'
import { Dimensions, TouchableOpacity, StyleSheet, View, SafeAreaView, Image } from 'react-native'
import Text from '../components/Text'
import Logo from '../components/Logo'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { RootStackScreenProps } from '../navigation/types';
import Colors from '../core/Colors'

const screen = Dimensions.get('window')
const logoWidth = (screen.width * 0.9)

const logoStyle = {
      resizeMode: 'contain',
      width: logoWidth - 15,
      height: (logoWidth / 2.5),
}

export default function SelectProfile({navigation}: RootStackScreenProps<'SelectProfile'>) {

  return (
    <View style = {styles.container}>
        <View style = {styles.topContainer}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style = {{marginTop:50}}>
                <Logo style={logoStyle} />
            </View>
        </View>
        <View style = {styles.bottomContainer}>
            <Text text='Select profile'/>
            <View style = {styles.btnContainer}>
                <TouchableOpacity style = {styles.iconColumnDriver} onPress={() => navigation.navigate('SignUpScreen')}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/icons/icon_Driver.png')}
                        />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.iconColumnRider} onPress={() => navigation.navigate('RideDetails')}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/icons/icon_Rider.png')}
                        />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: screen.height
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 35,
        marginTop: 35,
        marginBottom: 10,
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // alignContent: 'flex-end',
        width: '100%',
    },
    btnContainer: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: '10%',
    },
    iconColumnDriver: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: Colors.light.colors.primary,
        width: screen.width * 0.5,
        height: screen.width * 0.5,

    },
    iconColumnRider: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: Colors.light.colors.secondary,
        width: screen.width * 0.5,
        height: screen.width * 0.5,

    },
    icon: {
        width: 35, 
        height: 35,
    }


})