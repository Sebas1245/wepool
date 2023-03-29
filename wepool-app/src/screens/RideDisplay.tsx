import { useState, useEffect } from 'react'
import {HeaderBar} from "../components/HeaderBar";
import { StyleSheet, View, ScrollView } from 'react-native'
import { RootStackScreenProps } from '../navigation/types';
import {BackButton} from '../components/BackButton'
import {Header} from "../components/Header";
import {SearchBar} from '../components/SearchBar'
import {RideCard} from '../components/RideCard';
import _testUsers from '../TestDummyUsers.json';

export const RideDisplay = ({navigation}: RootStackScreenProps<'RideDisplay'>) => {

    /**
     * Getting dummy users info for testing purposes. 
     * TODO: 
     *  - Integrate with backend
     *  - A varible to know user type will be needed
     */

    const [allUsers, setUser] = useState<User[]>();
    useEffect(() => {
        setUser(_testUsers)
      }, []);
    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <HeaderBar user={allUsers ? allUsers[0].fname : 'Test'} userType="Rider"/>
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