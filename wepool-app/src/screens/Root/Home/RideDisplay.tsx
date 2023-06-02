// Packages
import { useState, useEffect, useContext } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  RefreshControl,
} from "react-native";
// Navigation
import { RootTabScreenProps } from "../../../navigation/types";
// Components
import { HeaderBar } from "../../../components/HeaderBar";
import { Header } from "../../../components/Header";
import { Oops } from "../../../components/Oops";
import { DriverCard } from "../../../components/DriverCard";
import { RideDetailsModal } from "../../../components/RideDetailsModal";
// Queries
import GetOpenRides, {
  GET_MY_RIDES,
  buildGetMySignedUpRidesVariables,
  buildGetOpenRidesVariables,
} from "../../../queries/GET/RideQueries";
import * as Location from "expo-location";
import { AuthContext } from "../../../AuthContext";

export const RideDisplay = ({ navigation }: RootTabScreenProps<"Home">) => {
  /**
   * TODO:
   *  - A varible to know user type will be needed
   *  - Apply 'Star' ratings
   *  - Variables missing: date, time, money, notes
   *  - This page is set to get the rides of context User using the app
   */
  const context = useContext(AuthContext);
  // Open and close ride detail modal
  const [openDetails, setOpenDetails] = useState(false);
  const [cardId, setCardId] = useState(-1);

  function handleOpenDetails() {
    setOpenDetails(!openDetails);
  }
  function handleCardId(id: number) {
    setCardId(id);
  }

  const requestLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log("Status -> ", status);
    if (status !== "granted") {
      alert("Location permission not granted. Unable to navigate.");
    }
    return;
  };

  // Getting query data
  const { loading, error, data } = useQuery(GET_MY_RIDES, {
    variables: buildGetMySignedUpRidesVariables(context?.authenticatedUser?.id),
  });
  const [queryRides] = useLazyQuery(GET_MY_RIDES, {
    variables: buildGetMySignedUpRidesVariables(context?.authenticatedUser?.id),
    fetchPolicy: 'network-only',
  });
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    const rides = await queryRides();
    console.log(rides.data);
    if (rides.data.rides) {
      setOpenRides(rides.data.rides);
    }
    setRefreshing(false);
  };
  const [openRides, setOpenRides] = useState<Ride[]>();
  useEffect(() => {
    requestLocation();
    if (data && data.rides) setOpenRides(data.rides);
  }, [loading]);

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
        <Header text="Current Rides" />
        <View style={styles.cardsContainer}>
          {openRides ? (
            openRides.length > 0 ? (
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              >
                {openRides.map((ride) => (
                  <View key={ride.id} style={styles.card}>
                    <DriverCard
                      date={ride.date ?? ""}
                      ride={ride}
                      handleOpenDetails={handleOpenDetails}
                      handleCardId={handleCardId}
                      cardId={ride.id}
                      joined={true}
                    />
                  </View>
                ))}
              </ScrollView>
            ) : (
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }
              >
                <Oops text="You have not signed up for any rides yet! Go to the Search tab to sign up for a ride " />
              </ScrollView>
            )
          ) : (
            <Oops />
          )}
          {openRides ? (
            <RideDetailsModal
              openDetails={openDetails}
              handleOpenDetails={handleOpenDetails}
              rides={openRides}
              rideId={cardId}
            />
          ) : null}
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
});
