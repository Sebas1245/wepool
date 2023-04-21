import { useState, useEffect } from 'react'
import {HeaderBar} from "../components/HeaderBar";
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { RootTabScreenProps } from '../navigation/types';
import {BackButton} from '../components/BackButton'
import {Header} from "../components/Header";
import {SearchBar} from '../components/SearchBar'
import {RideCard} from '../components/RideCard';
import _testUsers from '../TestDummyUsers.json';
import { useQuery } from '@apollo/client';

    // queries
    import GetOpenRides from '../queries/GET/RideQueries'

export const RideDisplay = ({navigation}: RootTabScreenProps<'RideDisplay'>) => {

    /**
     * TODO: 
     *  - Query cant access to 'status' variable.
     *  - Fix queries to not need a 'where' variable.
     *  - A varible to know user type will be needed
     *  - Ride variable for date and start ride hour
     */

    
    const { loading, error, data } = useQuery(GetOpenRides);
    
    const [openRides, setOpenRides] = useState<Ride[]>();
    useEffect(() => {
        if( data && data.rides)
        setOpenRides(data.rides)
    }, [loading])

    
    
    if (loading || !openRides) {
        ( console.log('Loading...'))
        return (
            <View><Text>Loading...</Text></View>
            ) ;
    }
    
    if (error) return ( console.log([JSON.stringify({data}), error, error.networkError]))
    // else ( console.log('Not any more...'))

    /** Fetching openRides  only until you get back and reload the page. */
    // if (!openRides) console.log('Not openRides')
    // else console.log(['yes open rides', openRides])
    
    
    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <HeaderBar user={'Test'} userType="Rider"/>
            </View>
            <View style = {styles.contentContainer}>
                <View style = {styles.backButton}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>
                <SearchBar/>
                <Header text="Open Rides"/>
                <View style = {styles.cardsContainer}>
                    <ScrollView>
                        {/* /**Cant access to all openrides because variables are unaccessible */ }
                    { openRides ? 
                        ((openRides.length > 1) ? openRides.map((ride) => {
                            return (
                                <View key={ride.id} style = {styles.card}>
                                    <RideCard date='20 Apr' time='08:00' start_loc={ride.driver?.street} final_loc={ride.driver?.company?.street} driverName = {ride.driver?.fname} status={ride.status}/>
                                </View>
                            );
                        }) : (
                            <View key={openRides[0].id} style = {styles.card}>
                                <RideCard date='20 Apr' time='08:00' start_loc={openRides[0].driver?.street} final_loc={openRides[0].driver?.company?.street} driverName = {openRides[0].driver?.fname} status={openRides[0].status}/>
                            </View>
                        )
                     ) : null}
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