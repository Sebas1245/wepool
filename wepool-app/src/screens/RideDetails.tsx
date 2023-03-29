import { useState } from 'react'
import {HeaderBar} from "../components/HeaderBar";
import { Dimensions, StyleSheet, View,  Image, TextInput } from 'react-native'
import { RootTabScreenProps } from '../navigation/types';
import Colors from '../core/Colors'
import {Header} from "../components/Header";
import { useThemeColors } from "../hooks/useThemeColors";

const screen = Dimensions.get('window')

export default function RideDetails({navigation}: RootTabScreenProps<'RideDetails'>) {
    const { colors } = useThemeColors();

    const tintColor = colors.tint
    const primaryColor = colors.colors.primary
    const secondaryColor = colors.colors.secondary

    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <HeaderBar user="Berns" userType="Rider"/>
            </View>
            <View style = {styles.contentContainer}>
                <Header text="Ride Details"/>
                <View style = {[styles.infoCard, {backgroundColor: tintColor}]}>
                    <View style = {styles.row}>
                        <TextInput style = {styles.textInput} placeholder='Date'/>
                        <TextInput style = {styles.textInput} placeholder='Time'/>
                    </View>
                    <View style = {styles.row}>
                        <Image
                            style={styles.icon}
                            source={require('../assets/icons/icon_Rider.png')}
                            />
                        <View>
                            <View style = {styles.row}>
                                <TextInput style = {styles.textInput} placeholder='From'/>
                            </View>
                            <View style = {styles.row}>
                                <TextInput style = {styles.textInput} placeholder='To'/>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.row}>
                        <TextInput style = {styles.textInput} placeholder='Cost'/>
                        <TextInput style = {styles.textInput} placeholder='Seats'/>
                    </View>
                    <View style = {styles.row}>
                        <TextInput style = {styles.textInput} placeholder='Model'/>
                        <TextInput style = {styles.textInput} placeholder='Color'/>
                    </View>
                </View>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 5,
    },
    btnContainer: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: '10%',
    },
    icon: {
        width: 35, 
        height: 35,
    }, 
    infoCard: {
        flex: 1,
        marginHorizontal: '10%',
        marginBottom: '20%',
        borderRadius: 15,
    }, 
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    textInput: {
        flex: 1, 
        // backgroundColor: 'white',
        // borderColor: 'black',
        // borderWidth: 0.2,
        // borderRadius: 15,
    }


})