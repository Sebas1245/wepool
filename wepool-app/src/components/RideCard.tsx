import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import {Button} from "./Button"
import { useThemeColors } from "../hooks/useThemeColors";
import { FontAwesome } from '@expo/vector-icons';

type Props = {
    date: string, 
    time: string,
    ride: Ride,
    handleOnPressEdit?: any
}

export const RideCard = ({date, time, ride, handleOnPressEdit}: Props) => {
    
    const { colors } = useThemeColors();
    const backgroundColor = colors.tint

    return (
        <View style = {[styles.container, {backgroundColor: backgroundColor}]}>
            <View style = {styles.dateTimeContainer}>
                <Text style = {{fontSize: 30}}>{date}</Text>
                <Text style = {{fontSize: 20}}>{time}</Text>
            </View>
            <View style = {styles.dataContainer}>
                <Text style = {{fontSize: 15}}>Driver: {`${ride.driver.fname} ${ride.driver.lname}`}</Text>
                <Text style = {{fontSize: 15}}>From: {(ride.startsAt.toString() === "DRIVER" ? ride.driver.street : ride.driver.company.street)}</Text>
                <Text style = {{fontSize: 15}}>To: {(ride.startsAt.toString() === "DRIVER" ? ride.driver.company.street : ride.driver.street)}</Text>
                <View style = {styles.buttonsContainer}>
                    <Button text="Close" style={[styles.button, {backgroundColor: 'red'}]} textStyle ={styles.buttonText}/>
                    <Button text="Riders" style={[styles.button, {backgroundColor: colors.colors.primary}]} textStyle ={styles.buttonText}/>
                    <Button text="Start" style={[styles.button, {backgroundColor: 'green'}]} textStyle ={styles.buttonText}/>
                </View>
            </View>
            <View style = {styles.edit}>
                <TouchableOpacity onPress={handleOnPressEdit}>
                    <FontAwesome name="edit" size={24} color="black" />
                </TouchableOpacity>
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
    dateTimeContainer: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5, 
        borderRightColor: 'black', 
        borderRightWidth: 2,
    },
    dataContainer: {
        flex: 4,
        justifyContent: 'center',
        marginLeft: 5,
    },
    buttonsContainer: {
        flexDirection: 'row'
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
    edit: {
        paddingRight: 5,
        paddingTop: 5
    }

})