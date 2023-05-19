// From Packages
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
// Navigation
import { RootStackScreenProps } from "../../../navigation/types";
// Components
import { BackButton } from "../../../components/BackButton";
import { RidesForm } from "../../../components/RidesForm";
import { StartingPoint } from "../../../services/enums";
// queries
import {
  UPDATE_ONE_RIDE,
  buildUpdateRideVariables
} from "../../../mutations/updateOneRide";
import { useMutation } from "@apollo/client";

/**
 * TODO:
 * - CREATE RIDE MUTATION
 */

export const CreateNewRide = ({
  navigation,
}: RootStackScreenProps<"CreateNewRide">) => {

 
  /** Create ride Mutation */
  const handleUpdateRide = async () => {
    
  }
  /** Screen UI */
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.topElements}>
        <Text style={styles.title}>CREATE RIDE</Text>
      </View>
      <View style ={styles.contentContainer}>
          <RidesForm selectedRide={null} handleUpdateRide={handleUpdateRide}/>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  backButton: {
    height: 100,
    width: "100%",
    alignItems: "flex-start",
    paddingTop: 5,
    paddingHorizontal: 25,
  },
  contentContainer: {
    flex: 4,
    width: "100%",
    padding: 10,
  },
  topElements: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  delete: {
    backgroundColor: "#fa9195",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 30,
    margin: 15,
  },
  text: {
    fontSize: 25,
  },
  background: {
    height: "55%",
    width: "80%",
    backgroundColor: "lightgray",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  doubleInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
  submit: {
    padding: 20,
    backgroundColor: "green",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  separator: {
    width: "80%",
  },
});
