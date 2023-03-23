import { useState } from 'react'
import HeaderBar from "../components/HeaderBar";
import { Dimensions, StyleSheet, View,  Image, TextInput } from 'react-native'
import Logo from '../components/Logo'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { RootStackScreenProps } from '../navigation/types';
import Colors from '../core/Colors'
import Header from "../components/Header";
import SearchBar from '../components/SearchBar'

const screen = Dimensions.get('window')

export default function RideDisplay({navigation}: RootStackScreenProps<'RideDisplay'>) {

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
                <View style = {styles.backButton}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>
                <SearchBar/>
                <Header text="Open Rides"/>
                <View style = {styles.cardsContainer}>

                </View>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 25,
        marginHorizontal: 25,
    },
    headerContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 5,
    },
    cardsContainer: {
        flex: 7
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