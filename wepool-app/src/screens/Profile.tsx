import { useState, useEffect } from 'react'
import { StyleSheet, View, Modal, TouchableOpacity, Text } from 'react-native'
import {Header} from "../components/Header";
import _testUsers from '../TestDummyUsers.json';
import { Divider } from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';
import { useThemeColors } from "../hooks/useThemeColors";

export const Profile = () => {

    /**
     * Getting dummy users info for testing purposes. 
     * TODO: 
     *  - Integrate with backend
     *  - A varible to know user type will be needed
     */
    const { colors } = useThemeColors();
    const backgroundColor = colors.colors.primary
        
    const [openDetails, setOpenDetails] = useState(true); //open and close ride detail modal
    function handleOnPressDetails(){
        setOpenDetails(!openDetails)
    }

    /** borderWidth: 0, when changed to 1 is used to see graphical structure */

    return (
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
                            <View style = {{position: 'absolute'}}>
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
                <View style = {[{flex: 1}, styles.contentContainer]}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style = {{flex: 1, marginTop: 10}}>
                                <Text style={styles.text}> RIDER NAME </Text>
                            </View>
                            <View style = {{flex: 1}}>
                                {/* //Rating stars box */}
                            </View>
                            <View style = {{flex: 1}}></View>
                            <View style = {{flex: 1}}>                                
                                <View style = {{flex: 1, flexDirection: 'row'}}>
                                    <FontAwesome name="phone" size={40} color="black" />
                                    <Text style={styles.text}> PhoneNum </Text>                                
                                </View>
                            </View>
                            <View style = {{flex: 1}}>
                                <View style = {{flex: 1, flexDirection: 'row'}}>
                                    <FontAwesome name="car" size={40} color="black" />
                                    <Text style={styles.text}> CarModel </Text>                                
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
    contentContainer: {
        // flex: 5,
        // marginHorizontal: 10,
    },
    profilePic: {
        borderRadius: 100,
        padding: 10,
        backgroundColor: 'white',
        position: 'relative',
        // marginLeft: 33,
        // justifyContent: 'center', 
        // alignContent: 'center',
        // alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
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
    }
})