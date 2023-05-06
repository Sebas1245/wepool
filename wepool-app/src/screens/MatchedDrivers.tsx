import { useState, useEffect } from 'react'
import {HeaderBar} from "../components/HeaderBar";
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { RootTabScreenProps, RootStackScreenProps } from '../navigation/types';
import {BackButton} from '../components/BackButton'
import {Header} from "../components/Header";
import { DriverCard } from '../components/DriverCard';
import { RideDetailsModal } from '../components/RideDetailsModal';
import { useQuery } from "@apollo/client";
import { Oops } from '../components/Oops';

// queries
import GetOpenRides from "../queries/GET/RideQueries";

export const MatchedDrivers = ({navigation}: RootStackScreenProps<'MatchedDrivers'>) => {

    /**
     * TODO:
     *  - A varible to know user type will be needed
     *  - Apply 'Star' ratings
     *  - Variables missing: date, time, money, notes
     */
    
    //open and close ride detail modal
    const [openDetails, setOpenDetails] = useState(false);
    const [cardId, setCardId] = useState(-1);
    
    function handleOpenDetails(){
        setOpenDetails(!openDetails)
    }
    function handleCardId(id: number){
        setCardId(id)
    }
    const { loading, error, data } = useQuery(GetOpenRides);

    const [openRides, setOpenRides] = useState<Ride[] | null>(null);
    useEffect(() => {
      if (data && data.rides) setOpenRides(data.rides);
    }, [loading]);
  
    if (error)
      console.log([JSON.stringify({ data }), error, error.networkError]);
    else if (loading || !openRides) {
      console.log("Loading...");
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <HeaderBar user={'Test'} userType="Rider"/>
            </View>
            <View style = {styles.contentContainer}>
                <View style = {styles.backButton}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>
                <Header text="Matched Drivers"/>
                <View style = {styles.cardsContainer}>
                    {openRides ? (
                        <ScrollView>
                                {openRides.map((ride) => 
                                    (
                                        <View key={ride.id} style = {styles.card}>
                                            <DriverCard date='20 Apr' time='08:00' start_loc={(ride.startsAt.toString() === "DRIVER" ? ride.driver.street : ride.driver.company.street)} final_loc={(ride.startsAt.toString() === "DRIVER" ? ride.driver.company.street: ride.driver.street)} driverName = {`${ride.driver.fname} ${ride.driver.lname}`} status={true} handleOpenDetails = {handleOpenDetails} handleCardId={handleCardId} cardId={ride.id}/>
                                        </View>
                                    )
                                )}
                        </ScrollView>
                    ) : 
                    <Oops/> 
                }
                    {openRides ? (
                        <RideDetailsModal openDetails = {openDetails} handleOpenDetails = {handleOpenDetails} rides={openRides} rideId={cardId}/>)
                        : null
                    }
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