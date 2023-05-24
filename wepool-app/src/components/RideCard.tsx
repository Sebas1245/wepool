import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import {Button} from "./Button"
import { useThemeColors } from "../hooks/useThemeColors";
import { FontAwesome } from '@expo/vector-icons';
import { DateTime } from './Date';
import { StartingPoint, RideStatus} from '../services/enums';

type Props = {
    ride: Ride,
    handleOnPressEdit: (cardId: number, driverCar: Car | undefined) => void,
    cardId: number
}

export const RideCard = ({ride, handleOnPressEdit, cardId}: Props) => {
    
    const { colors } = useThemeColors();
    const backgroundColor = colors.tint

    const start_loc = (ride.startsAt === StartingPoint.DRIVER ? ride.driver.street : ride.driver.company.street)
    const final_loc = (ride.startsAt === StartingPoint.DRIVER ? ride.driver.company.street : ride.driver.street)

    return (
        <View style = {[styles.container, {backgroundColor: backgroundColor}]}>
            <View style = {styles.dateTimeContainer}>
                <DateTime date={ride.date?? ''} />
            </View>
            <View style = {styles.dataContainer}>
                <Text style = {{fontSize: 15}}>From: {start_loc}</Text>
                <Text style = {{fontSize: 15}}>To: {final_loc}</Text>
                <View style = {styles.buttonsContainer}>
                    <Button 
                        text="Start" 
                        style={[styles.button, {backgroundColor: ride.status == RideStatus.OPEN ? 'green': 'gray'}]} 
                        textStyle ={styles.buttonText}
                        props={{"disabled": ride.status == RideStatus.OPEN ? false : true}}
                        />
                    <Button 
                        text="Riders" 
                        style={[styles.button, {backgroundColor: ride.status == RideStatus.CLOSED ? colors.colors.primary: 'gray'}]} 
                        textStyle ={styles.buttonText}
                        props={{"disabled": true}}
                        />
                    <Button 
                        text="Close" 
                        style={[styles.button, {backgroundColor: ride.status == RideStatus.CLOSED ? 'red': 'gray'}]} 
                        textStyle ={styles.buttonText}
                        props={{"disabled": ride.status == RideStatus.CLOSED ? false : true}}
                        />
                </View>
            </View>
            <View style = {styles.edit}>
                <TouchableOpacity onPress={() => handleOnPressEdit(cardId, ride.driver.car)}>
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