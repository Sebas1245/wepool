import React, { useState } from 'react'
import { Dimensions, TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native'
import Logo from '../components/Logo'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { RootStackScreenProps } from '../navigation/types';
import Colors from '../core/Colors'

const screen = Dimensions.get('window')
const logoWidth = (screen.width * 0.9)

export default function SelectProfile({navigation}: RootStackScreenProps<'SelectProfile'>) {

  return (
    <View style = {styles.container}>
        <View style = {styles.topContainer}>
            <View style = {styles.backButton}>
                <BackButton onPress={() => navigation.goBack()} />
            </View>
            <View style = {{marginTop:50}}>
                <Logo style={styles.logoStyle} />
            </View>
        </View>
        <View style = {styles.bottomContainer}>
            <Text style={styles.text}>Select profile</Text>
            <View style = {styles.btnContainer}>
                <TouchableOpacity style = {styles.iconColumnDriver} onPress={() => navigation.navigate('SignUpScreen')}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/icons/icon_Driver.png')}
                        />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.iconColumnRider} onPress={() => navigation.navigate('RideDisplay')}>
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
    backButton: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
      },
    logoStyle: {
        resizeMode: 'contain',
        width: logoWidth - 15,
        height: (logoWidth / 2.5),
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
        width: '25%', 
        height: '25%',
    }, 
    text: {
        fontSize: 25,
        color: Colors.light.colors.text,
        paddingVertical: 12,
    },


})