import { StyleSheet, View, Text } from "react-native";
import { Button } from "./Button";
import { useThemeColors } from "../hooks/useThemeColors";
import { FontAwesome } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { Date, DateTime } from "./Date";
import { AuthContext, AuthContextType } from "../AuthContext";
import { useMutation } from "@apollo/client";
import {
  UPDATE_ONE_RIDE,
  buildUpdateRideAddPassengerVariables,
} from "../mutations/updateOneRide";
import { RootStackScreenProps } from "../navigation/types";

type Props = {
  date: string;
  ride: Ride;
  handleOpenDetails?: any;
  handleCardId?: any;
  cardId: number;
  joined: boolean;
  handleAddPassenger?: (rideId: number) => Promise<void>;
  handleRemovePassenger?: (rideId: number) => Promise<void>;
};

export const DriverCard = ({
  date,
  ride,
  handleOpenDetails,
  handleCardId,
  cardId,
  joined,
  handleAddPassenger,
  handleRemovePassenger,
}: Props) => {
  const { colors } = useThemeColors();
  const backgroundColor = colors.tint;

  const driver = ride.driver;
  const start_loc =
    ride.startsAt.toString() === "DRIVER"
      ? ride.driver.street
      : ride.driver.company.street;
  const final_loc =
    ride.startsAt.toString() === "DRIVER"
      ? ride.driver.company.street
      : ride.driver.street;

  function handleOnPressRideDetails() {
    handleCardId(cardId);
    handleOpenDetails();
  }

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.driverImageContainer}>
        <FontAwesome name="user" size={40} color="black" />
        <Text>{`${driver.fname} ${driver.lname}`}</Text>
        <Text>Num Stars</Text>
      </View>
      <View style={{ flex: 3 }}>
        <View style={styles.contentContainer}>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 15 }}>From: {start_loc}</Text>
            <Text style={{ fontSize: 15 }}>To: {final_loc}</Text>
          </View>
          <DateTime date={date} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Ride Details"
            style={[styles.button, { backgroundColor: "orange" }]}
            textStyle={styles.buttonText}
            onPress={handleOnPressRideDetails}
          />
          {handleRemovePassenger && handleAddPassenger ? (
            joined ? (
              <Button
                text="Cancel"
                style={[styles.button, { backgroundColor: "red" }]}
                textStyle={styles.buttonText}
                onPress={() => handleRemovePassenger(ride.id)}
              />
            ) : (
              <Button
                text="Join Ride"
                style={[styles.button, { backgroundColor: "green" }]}
                textStyle={styles.buttonText}
                onPress={() => handleAddPassenger(ride.id)}
              />
            )
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
  },
  driverImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    // width: 45,
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
  },
  timeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
