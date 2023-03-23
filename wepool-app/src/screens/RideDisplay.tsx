import { useState } from 'react'
import HeaderBar from "../components/HeaderBar";
import { Dimensions, StyleSheet, View } from 'react-native'
import BackButton from '../components/BackButton'
import { RootStackScreenProps } from '../navigation/types';
import Colors from '../core/Colors'
import Header from "../components/Header";
import SearchBar from '../components/SearchBar'
import RideCard from '../components/RideCard';

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
                    <View style = {styles.card}>
                        <RideCard date='20 Apr' time='08:00' start_loc='Tec' final_loc='Mi casa' status={true}/>
                    </View>
                    <View style = {styles.card}>
                        <RideCard date='20 Apr' time='18:00' start_loc='Mi casa' final_loc='Tec' status={true}/>
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
        marginHorizontal: 10,
    },
    cardsContainer: {
        flex: 7,
    },
    card: {
        width: '100%', 
        height: '25%', 
        marginVertical: 10,
    }



})