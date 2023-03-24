import { useState, useEffect } from 'react'
import HeaderBar from "../components/HeaderBar";
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native'
import BackButton from '../components/BackButton'
import { RootStackScreenProps } from '../navigation/types';
import Colors from '../core/Colors'
import Header from "../components/Header";
import SearchBar from '../components/SearchBar'
import RideCard from '../components/RideCard';
import _testUsers from '../TestDummyUsers.json';;

export default function RideDisplay({navigation}: RootStackScreenProps<'RideDisplay'>) {

    const [user, setUser] = useState<User[]>();
    // const users = _testUsers as Array<User>;
    useEffect(() => {
        setUser(_testUsers)
      }, []);
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
                    <ScrollView>
                    {_testUsers.map((user) => {
                        return (
                            <View key={user.id} style = {styles.card}>
                                <RideCard date='20 Apr' time='08:00' start_loc={user.street} final_loc={user.city} driverName = {user.fname} status={true}/>
                            </View>
                        );
                    })}
                    </ScrollView>
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
        height: 150, 
        marginVertical: 10,
    }



})