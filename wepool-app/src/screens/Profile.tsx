import { useState, useEffect } from 'react'
import { StyleSheet, View, Modal, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useThemeColors } from "../hooks/useThemeColors";
import { useQuery, gql } from '@apollo/client';

/**
 * This is one of the mthfckr packages that gets in trouble with apollo. 'Divider' is not used here, but is used in CreateRide and other components:
 */
import { Divider } from '@rneui/themed';            

// queries
import ExampleQuery from '../queries/GET/UserQueries'

export const Profile = () => {

    const { colors } = useThemeColors();
    const backgroundColor = colors.colors.primary

    /** 
     * When using useQuery hook you can get loading status, error info, and data
     * See more: https://www.apollographql.com/docs/react/data/queries/
    */

   const { loading, error, data, networkStatus } = useQuery(ExampleQuery);
   
   if (loading) return ( console.log('Loading...'));
   if (error) return ( console.log([JSON.stringify({data}), error, error.networkError]))
   
    /** You can also get the network status code:  supposedly '8' means failed connection, '7' means a correct connection.*/
//    if (networkStatus) return (console.log(networkStatus))
    /**
    * The errors I got were: no connection to server [msg 'Network request failed'], 
    * or getting no response from service with query [msg 'Server response was missing for query <queryName>']
     */

    return (
        /** borderWidth: 0, when changed to 1 is used to see graphical structure */
        <View style = {[{backgroundColor: backgroundColor}, styles.container]}>
            <View style = {{flex : 1, borderWidth: 0}}>
                <View style = {{flex: 1}}></View>
                <View style = {{flex: 1, flexDirection: 'row', borderWidth: 0}}>
                    <View style = {[{flex: 1, justifyContent: 'flex-end', borderWidth: 0}]}>
                            <View style = {{flex:1, borderWidth: 0}}></View>
                            <View style = {{flex: 1, borderTopLeftRadius: 50, backgroundColor: 'white'}}></View>
                    </View>
                    <View style = {[{flex: 1, justifyContent: 'flex-end', borderWidth: 0}]}>
                            <View style = {{flex:1, borderWidth: 0}}></View>
                            <View style = {{flex: 1, backgroundColor: 'white'}}></View>
                            <View style = {[{borderWidth: 0}, styles.absoluteCentered]}>
                                <FontAwesome style = {styles.profilePic} name="user-circle-o" size={100} color="black" />
                            </View>
                    </View>
                    <View style = {[{flex: 1, justifyContent: 'flex-end', borderWidth: 0}]}>
                            <View style = {{flex:1, borderWidth: 0}}></View>
                            <View style = {{flex: 1, borderTopRightRadius: 50, backgroundColor: 'white'}}></View>
                    </View>

                </View>
            </View>
            <View style = {{flex : 2}}>
                <View style = {[{flex: 1}]}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style = {{flex: 1, marginTop: 10}}>
                                <Text style={styles.text}> {data ? ` ${data.getUser.fname} ${data.getUser.lname}`: 'USER NAME'} </Text>
                            </View>
                            <View style = {{flex: 1}}>
                                {/* //Rating stars box */}
                            </View>
                            <View style = {{flex: 1}}></View>
                            <View style = {{flex: 1}}>                                
                                <View style = {{flex: 1, flexDirection: 'row'}}>
                                    <FontAwesome name="phone" size={40} color="black" />
                                    <Text style={styles.text}> {data ? data.getUser.number: 'USER NAME'} </Text>                                
                                </View>
                            </View>
                            <View style = {{flex: 1}}>
                                <View style = {{flex: 1, flexDirection: 'row'}}>
                                    <FontAwesome name="car" size={40} color="black" />
                                    <Text style={styles.text}> {data ? `${data.getUser.car.brand} ${data.getUser.car.model} ${data.getUser.car.year}`:'CAR'} </Text>                                
                                </View>                                
                            </View>
                            <View style = {{flex: 1}}>
                                {/* // Password box */}
                            </View>
                            <View style = {{flexDirection:'row', justifyContent: 'flex-start', marginBottom: 10}}>
                            </View>
                        </View>
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
    topOfContentBox: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 50,        
        borderTopRightRadius: 50,
        borderWidth: 1,
    },
    absoluteCentered: {
        position: 'absolute',
        left: '50%',
    },
    profilePic: {
        borderRadius: 100,
        padding: 10,
        backgroundColor: 'white',
        position: 'relative',
        left: '-50%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
    },
    modalView: {
        backgroundColor: "white",
        width: "100%",
        height: '100%',
        paddingHorizontal: 35,
        alignItems: "center",
    },
    text: {
        fontSize: 25,
    }, 
})