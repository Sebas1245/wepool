// From Packages
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// Navigation
import { RootStackScreenProps } from "../../../navigation/types";
// Components
import { Oops } from "../../../components/Oops";
import { BackButton } from "../../../components/BackButton";
import { StartingPoint } from "../../../services/enums";
// queries
import {
  UPDATE_ONE_RIDE,
  buildUpdateRideVariables
} from "../../../mutations/updateOneRide";
import { useMutation } from "@apollo/client";
import { RidesForm } from "../../../components/RidesForm";

/**
 * TODO:
 * - QUERY ONLY UPDATES startsAt and date VARIABLES
 * - DELETE RIDE
 * - WHEN UPDATING, AFTER NAVIGATION SCREENS DOESNT UPDATE.
 * - LETS UPDATE THE WAY CARS ARE MANAGED IN PROFILE AND CREATE RIDE
 * - WE SHOULD HAVE TIME AND DATE SEPARETED
 */

export const EditRide = ({
  route,
  navigation,
}: RootStackScreenProps<"EditRide">) => {
  /** Getting the props */
  const { rides, cardId } = route.params;

  const confirmDialog = () => {
    return Alert.alert(
      "Delete Ride?",
      "Are you sure you want to delete the current ride?",
      [
        {
          text: "Yes",
          onPress: () => {
            //TBD: Delete the ride
            console.log("Attempting to delete the ride");
          },
        },

        {
          text: "No",
        },
      ]
    );
  };

  /** Initialize values */
    // Find the selected ride acording to the ride id.
    // Selected ride is Ride[] or undefined because openRides from MyRides doesnt have initial value
  const selectedRide = rides
    ? rides.find((ride) => {
        return ride.id === cardId;
      })
    : undefined;

  /** Save changes Mutation */
  const [
    updateRideMutation,
    { data: mutationData, loading: loadingMutation, error: mutationError },
  ] = useMutation(UPDATE_ONE_RIDE);
  const handleUpdateRide = async (getISODateString: string, startsAt: StartingPoint, availableSeats: number) => {
    if(selectedRide)
    {
      const mutationResult = await updateRideMutation(
        buildUpdateRideVariables(selectedRide.id, selectedRide, startsAt, getISODateString, availableSeats)
      )
      if (mutationResult.data && mutationResult.data.updateOneRide) {
        console.log("Updated ride");
        console.log(mutationResult.data.updateOneRide)
        navigation.navigate("Root");
      }
    }
  }

  /** Screen UI */
  if (selectedRide) {
    return (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.topElements}>
          <Text style={styles.title}>EDIT RIDE</Text>
          <TouchableOpacity
            style={styles.delete}
            onPress={() => confirmDialog()}
          >
            <MaterialIcons name="delete-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style ={styles.contentContainer}>
          <RidesForm selectedRide={selectedRide} handleUpdateRide={handleUpdateRide}/>
        </View>
      </View>
    );
  } else {
    return <Oops />;
  }
};

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
