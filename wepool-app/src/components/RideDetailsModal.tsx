import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import {Button} from "./Button"
import { useThemeColors } from "../hooks/useThemeColors";
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';

type Props = {
    openDetails: boolean,
    handleOnPressDetails: any,
}

export const RideDetailsModal = ({openDetails, handleOnPressDetails}: Props) => {
    
    const { colors } = useThemeColors();
    const backgroundColor = colors.tint

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={openDetails}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style = {{flexDirection: 'row'}}>
                            <FontAwesome name="user" size={100} color="black" />
                            <View style = {{flex: 1, justifyContent: 'center', marginLeft: 10}}>
                                <Text style = {{margin: 5}}>driverName</Text>
                                <Text style = {{margin: 5}}>Num Stars</Text>
                            </View>
                        </View>
                        <View style = {{flexDirection:'row', justifyContent: 'flex-start'}}>
                            <View style = {{flex: 1, margin: 20}}>
                                <Text style={styles.text}> FROM </Text>
                                <Divider></Divider>
                                <Text style={styles.text}> TO </Text>
                            </View>
                        </View>
                        <View style = {{flexDirection:'row', justifyContent: 'flex-start', marginBottom: 10}}>
                            <View style = {{flex: 1, flexDirection: 'row'}}>
                                <FontAwesome name="phone" size={40} color="black" />
                                <Text style={styles.text}> PhoneNum </Text>                                
                            </View>
                        </View>
                        <View style = {{flexDirection:'row', justifyContent: 'flex-start', marginBottom: 10}}>
                            <View style = {{flex: 1, flexDirection: 'row'}}>
                                <FontAwesome name="money" size={40} color="black" />
                                <Text style={styles.text}> money </Text>                                
                            </View>
                        </View>
                        <View style = {{flexDirection:'row', justifyContent: 'flex-start', marginBottom: 10}}>
                            <View style = {{flex: 1, flexDirection: 'row'}}>
                                <FontAwesome name="id-card" size={40} color="black" />
                                <Text style={styles.text}> Plates </Text>                                
                            </View>
                        </View>
                        <View style = {{flexDirection:'row', justifyContent: 'flex-start', marginBottom: 10}}>
                            <View style = {{flex: 1, flexDirection: 'row'}}>
                                <FontAwesome name="car" size={40} color="black" />
                                <Text style={styles.text}> CarModel </Text>                                
                            </View>
                        </View>
                        <View style = {{flexDirection:'row', justifyContent: 'flex-start', marginBottom: 10}}>
                            <View style = {{flex: 1, flexDirection: 'row'}}>
                                <FontAwesome name="sticky-note-o" size={40} color="black" />
                                <Text style={styles.text}> Notes </Text>                                
                            </View>
                        </View>
                        <TouchableOpacity onPress={handleOnPressDetails}>
                            <Text>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    )
  }

  /**
   * Not using flex so that the modal adapts to the information size and space
   * Easier since is the only thing that will be appearing in upper layer screen
   */
  const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 100,
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
    text: {
        fontSize: 25,
    }


})