// Packages
import { StyleSheet, View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
// Hooks
import { useThemeColors } from "../../../hooks/useThemeColors";
// Queries
import { useQuery, gql } from '@apollo/client';
import GetUser from '../../../queries/GET/UserQueries'
import { useContext } from 'react';
import { AuthContext } from '../../../AuthContext';

export const Profile = () => {
    const authContext = useContext(AuthContext);
    console.log('Checking authContext...', authContext?.authenticatedUser);
    const { colors } = useThemeColors();
    const backgroundColor = colors.colors.primary
    /**
     * TODO:
     * - Update GetUser query to get the context User info
     */
    /** 
     * When using useQuery hook you can get loading status, error info, and data
     * See more: https://www.apollographql.com/docs/react/data/queries/
    */
    // Getting query data
   const { loading, error, data } = useQuery(GetUser);
   
   if (error) ( console.log([JSON.stringify({data}), error, error.networkError]))
   else if (loading) { 
    console.log('Loading...')
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
    };

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
                                    <Text style={styles.text}> {data ? data.getUser.number: 'USER PHONE'} </Text>                                
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