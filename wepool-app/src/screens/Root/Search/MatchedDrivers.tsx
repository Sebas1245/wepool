import { useState, useEffect, useContext } from "react";
import { HeaderBar } from "../../../components/HeaderBar";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import {
  RootTabScreenProps,
  RootStackScreenProps,
} from "../../../navigation/types";
import { BackButton } from "../../../components/BackButton";
import { Header } from "../../../components/Header";
import { DriverCard } from "../../../components/DriverCard";
import { RideDetailsModal } from "../../../components/RideDetailsModal";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Oops } from "../../../components/Oops";

// queries
import GetOpenRides, {
  GET_MY_RIDES,
  buildGetMyRidesVariables,
} from "../../../queries/GET/RideQueries";
import { AuthContext } from "../../../AuthContext";
import {
  UPDATE_ONE_RIDE,
  buildUpdateRideAddPassengerVariables,
  buildUpdateRideRemovePassengerVariables,
} from "../../../mutations/updateOneRide";
import { PASSENGER_RIDES } from "../../../queries/GET/UserQueries";
import { useIsFocused } from "@react-navigation/native";

export const MatchedDrivers = ({
  navigation,
  route,
}: RootStackScreenProps<"MatchedDrivers">) => {
  const context = useContext(AuthContext);
  const isFocused = useIsFocused();
  /**
   * TODO:
   *  - A varible to know user type will be needed
   *  - Apply 'Star' ratings
   *  - Variables missing: date, time, money, notes
   */

  // Open and close ride detail modal
  const [openDetails, setOpenDetails] = useState(false);
  const [cardId, setCardId] = useState(-1);
  const [
    updateRideMutation,
    { data: mutationData, loading: loadingMutation, error: mutationError },
  ] = useMutation(UPDATE_ONE_RIDE);

  function handleOpenDetails() {
    setOpenDetails(!openDetails);
  }
  function handleCardId(id: number) {
    setCardId(id);
  }

  // Getting query data
  const { loading, error, data } = useQuery(GET_MY_RIDES, {
    variables: buildGetMyRidesVariables(context?.authenticatedUser?.id),
  });
  const [queryPassengerRides] = useLazyQuery(PASSENGER_RIDES, {
    variables: { where: { id: context?.authenticatedUser?.id } },
    fetchPolicy: "network-only",
  });

  const [openRides, setOpenRides] = useState<Ride[] | null>(null);
  const [joinedRidesIds, setJoinedRidesIds] = useState<number[]>([]);
  const checkCurrentPassengerRides = async () => {
    const queryResult = await queryPassengerRides();
    console.log("Query results ", queryResult.data.user.passengerRides);
    if (queryResult.data.user) {
      const passengerRidesIds = queryResult.data.user.passengerRides.map(
        (passengerRide: { rideId: any }) => passengerRide.rideId
      );
      setJoinedRidesIds(passengerRidesIds);
    }
  };

  useEffect(() => {
    if (isFocused) {
      console.log("isFocused");
      checkCurrentPassengerRides();
    }
    if (data && data.rides) {
      setOpenRides(data.rides);
    }
  }, [loading, isFocused]);

  if (error) console.log([JSON.stringify({ data }), error, error.networkError]);
  else if (loading || !openRides) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleAddPassengerToRide = async (rideId: number) => {
    if (context && context.authenticatedUser) {
      const mutationResult = await updateRideMutation(
        buildUpdateRideAddPassengerVariables(
          rideId,
          context?.authenticatedUser.id
        )
      );
      if (mutationResult.data && mutationResult.data.updateOneRide) {
        console.log("Added passenger to ride");
        const addedRide = openRides?.find(
          (ride) => ride.id === mutationResult.data.updateOneRide.id
        );
        if (addedRide) {
          setJoinedRidesIds([...joinedRidesIds, addedRide.id]);
        }
      }
    }
  };

  const handleRemovePassengerFromRide = async (rideId: number) => {
    if (context && context.authenticatedUser) {
      const mutationResult = await updateRideMutation(
        buildUpdateRideRemovePassengerVariables(
          rideId,
          context?.authenticatedUser.id
        )
      );
      if (mutationResult.data && mutationResult.data.updateOneRide) {
        console.log("Removed passenger from ride with id " + rideId);
        const joinedRidesAfterRemoval = joinedRidesIds.filter(
          (joinedRideId) =>
            joinedRideId !== mutationResult.data.updateOneRide.id
        );
        console.log(joinedRidesAfterRemoval);
        setJoinedRidesIds(joinedRidesAfterRemoval);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderBar />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.backButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Header text="Matched Drivers" />
        <View style={styles.cardsContainer}>
          {openRides ? (
            <ScrollView>
              {openRides.map((ride) => (
                <View key={ride.id} style={styles.card}>
                  <DriverCard
                    date={ride.date ?? ""}
                    ride={ride}
                    handleOpenDetails={handleOpenDetails}
                    handleCardId={handleCardId}
                    cardId={ride.id}
                    joined={joinedRidesIds.includes(ride.id)}
                    handleAddPassenger={handleAddPassengerToRide}
                    handleRemovePassenger={handleRemovePassengerFromRide}
                  />
                </View>
              ))}
            </ScrollView>
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
    paddingTop: 25,
    paddingHorizontal: 25,
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
});
