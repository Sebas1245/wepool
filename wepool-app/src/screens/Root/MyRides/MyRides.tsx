// Packages
import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, ScrollView, Text, Touchable } from "react-native";
// Navigation
import { RootTabScreenProps } from "../../../navigation/types";
// Components
import { HeaderBar } from "../../../components/HeaderBar";
import { Header } from "../../../components/Header";
import { Oops } from "../../../components/Oops";
import { RideCard } from "../../../components/RideCard";
import { Button } from "../../../components/Button";
// Queries
import { useQuery } from "@apollo/client";
import { GET_MY_RIDES } from "../../../queries/GET/RideQueries";
import { AuthContext } from "../../../AuthContext";

export const MyRides = ({ navigation, route }: RootTabScreenProps<"MyRides">) => {
  /**
   * TODO:
   *  - Ride variable for money and notes
   *  - After editing or creating the ride, it doesnt refresh automatically
   *  - Unable to test TimePicker and ConfirmDialog
   */
  const context = useContext(AuthContext)
  
  const handleOnPressEdit = (id: number, driverCar: Car | undefined) => {
    // Navigate to edit ride screen of the selected ride
    // Edit ride receives params (props) to get the data from the cards
    navigation.navigate("EditRide", {
      rides: openRides,
      cardId: id,
      driverCar: driverCar,
    });
  }

  // Getting query data
  const { loading, error, data } = useQuery(GET_MY_RIDES, {
    variables: {
      where: { driverId: { equals: context?.authenticatedUser?.id }},
    },
  });

  const [openRides, setOpenRides] = useState<Ride[]>();
  
  useEffect(() => {
    if (data && data.rides) setOpenRides(data.rides);
    console.log(openRides)
  }, [navigation, loading]);

  if (error) console.log([JSON.stringify({ data }), error, error.networkError]);
  else if (loading || !openRides) {
    console.log("Loading...");
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderBar />
      </View>
      <View style={styles.contentContainer}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View style={{flex: 2}}>
            <Header text="My Rides" />
          </View>
          {openRides ? (
            <View style={{flex: 1, paddingVertical: 15}}>
              <Button
                text="+ Create Ride"
                style={[styles.button, { backgroundColor: "green" }]}
                textStyle={styles.buttonText}
                onPress={() => navigation.navigate("CreateNewRide")}
              />
            </View>
          ): null}
        </View>
        <View style={styles.cardsContainer}>
          {openRides ? (
            <ScrollView>
              {openRides.map((ride) => {
                return (
                  <View key={ride.id} style={styles.card}>
                    <RideCard
                      ride={ride}
                      cardId={ride.id}
                      handleOnPressEdit={handleOnPressEdit}
                    />
                  </View>
                );
              })}
            </ScrollView>
          ) : (
            <Oops />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
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
    width: "100%",
    height: 150,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
