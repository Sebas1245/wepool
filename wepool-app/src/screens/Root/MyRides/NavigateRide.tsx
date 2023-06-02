import { useEffect, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { View } from "../../../components/Themed";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { googleMapsAPIKey } from "../../../../clientIds";
import * as Location from "expo-location";
import { useThemeColors } from "../../../hooks/useThemeColors";
import { BackButton } from "../../../components/BackButton";
import navigation from "../../../navigation";
import { RootStackScreenProps } from "../../../navigation/types";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const NavigateRide = ({
  navigation,
  route,
}: RootStackScreenProps<"NavigateRide">) => {
  const {
    colors: { colors },
  } = useThemeColors();
  const [locationPermission, requestPermission] =
    Location.useForegroundPermissions();
  const [location, setLocation] = useState<Pick<
    Location.LocationObjectCoords,
    "latitude" | "longitude"
  > | null>(null);

  const [origin, setOrigin] = useState({
    latitude: 25.748376,
    longitude: -100.40828,
  });

  const [destination, setDestination] = useState({
    latitude: 25.717934,
    longitude: -100.388918,
  });

  useEffect(() => {
    const getLocation = async () => {
      if (locationPermission?.status === "granted") {
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.BestForNavigation,
        });
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    };
    getLocation();
  }, [location]);
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location?.latitude || origin.latitude,
          longitude: location?.longitude || origin.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        <Marker coordinate={location ?? origin} pinColor={colors.secondary} />
        <Marker coordinate={destination} />
        <MapViewDirections
          origin={location ?? origin}
          destination={destination}
          apikey={googleMapsAPIKey}
          strokeWidth={5}
          strokeColor={colors.primary}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  map: {
    width: "100%",
    height: "90%",
  },
  backButton: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    paddingTop: 40,
    paddingHorizontal: 25,
  },
});
