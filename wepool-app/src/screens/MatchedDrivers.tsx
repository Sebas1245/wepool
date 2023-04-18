import { useState, useEffect } from 'react'
import {HeaderBar} from "../components/HeaderBar";
import { StyleSheet, View, ScrollView, Modal, TouchableOpacity, Text } from 'react-native'
import { RootTabScreenProps, RootStackScreenProps } from '../navigation/types';
import DatePicker from "react-native-modern-datepicker";
import {BackButton} from '../components/BackButton'
import {Header} from "../components/Header";
import { DriverCard } from '../components/DriverCard';
import { RideDetailsModal } from '../components/RideDetailsModal';
import _testUsers from '../TestDummyUsers.json';

export const MatchedDrivers = ({navigation}: RootStackScreenProps<'MatchedDrivers'>) => {

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
        
    const [openDetails, setOpenDetails] = useState(false); //open and close ride detail modal
    function handleOnPressDetails(){
        setOpenDetails(!openDetails)
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <HeaderBar user={allUsers ? allUsers[0].fname : 'Test'} userType="Rider"/>
            </View>
            <View style = {styles.contentContainer}>
                <View style = {styles.backButton}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>
                <Header text="Matched Drivers"/>
                <View style = {styles.cardsContainer}>
                    <ScrollView>
                    {_testUsers.map((user) => {
                        return (
                            <View key={user.id} style = {styles.card}>
                                <DriverCard date='20 Apr' time='08:00' start_loc={user.street} final_loc={user.city} driverName = {user.fname} status={true} handleOnPressDetails = {handleOnPressDetails}/>
                            </View>
                        );
                    })}
                    </ScrollView>
                    <RideDetailsModal openDetails = {openDetails} handleOnPressDetails = {handleOnPressDetails}/>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: "90%",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },




})