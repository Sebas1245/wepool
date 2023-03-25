import { useState } from 'react'
import HeaderBar from "../components/HeaderBar";
import { Dimensions, StyleSheet, View,  Image, TextInput } from 'react-native'
import { RootStackScreenProps } from '../navigation/types';
import Colors from '../core/Colors'
import Header from "../components/Header";

const screen = Dimensions.get('window')

export default function RideDetails({navigation}: RootStackScreenProps<'RideDetails'>) {

    const [user, setUser] = useState<User>({
        _id: 1,
        name: 'Bernardo',
        lastname: 'Garcia', 
        email: 'bernardo@gmail.com', 
        password: '1234', 
        phoneNumber: '1234'
      });
    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <HeaderBar user="Berns" userType="Rider"/>
            </View>
            <View style = {styles.contentContainer}>
                <Header text="Ride Details"/>
                <View style = {styles.infoCard}>
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
    }, 
    infoCard: {
        flex: 1,
        marginHorizontal: '10%',
        marginBottom: '20%',
        backgroundColor: Colors.light.tint, 
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