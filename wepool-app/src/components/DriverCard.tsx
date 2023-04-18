import { StyleSheet, View, Text } from 'react-native'
import {Button} from "./Button"
import { useThemeColors } from "../hooks/useThemeColors";
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

type Props = {
    date: string, 
    time: string, 
    start_loc: string, 
    final_loc: string,
    driverName: string,
    status: boolean,
    userType?: "Rider" | "Driver",
    handleOnPressDetails?: any
}

export const DriverCard = ({date, time, start_loc, final_loc, driverName, status, userType = 'Rider', handleOnPressDetails}: Props) => {
    
    const { colors } = useThemeColors();
    const backgroundColor = colors.tint

    return (
        <View style = {[styles.container, {backgroundColor: backgroundColor}]}>
            <View style = {styles.driverImageContainer}>
                <FontAwesome name="user" size={40} color="black" />
                <Text>{driverName}</Text>
                <Text>Num Stars</Text>
            </View>
            <View style = {{flex: 3}}>
                <View style = {styles.contentContainer}>
                    <View style = {{flex: 2}}>
                        <Text style = {{fontSize: 15}}>From: {start_loc}</Text>
                        <Text style = {{fontSize: 15}}>To: {final_loc}</Text>
                    </View>
                    <Text style = {{fontSize: 30, marginRight: 5}}>{time}</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <Button text="Ride Details" style={[styles.button, {backgroundColor: 'orange'}]} textStyle ={styles.buttonText} onPress={handleOnPressDetails}/>
                    <Button text="Join Ride" style={[styles.button, {backgroundColor: 'green'}]} textStyle ={styles.buttonText}/>
                </View>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black', 
        borderWidth: 2,
        borderRadius: 15,
    },
    driverImageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1, 
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        // width: 45,
        height: '70%',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        margin: 5,
    },
    buttonText: {
        color: 'white', 
        fontSize: 12,
    },
    timeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})