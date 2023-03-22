import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CreateNewRide() {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CREATE NEW RIDE</Text>
      <View style={styles.background}>
        <View style={styles.doubleInput}>
          <View style={{ flex: 1 }}>
            <Text>Date</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Time</Text>
          </View>
        </View>

        <View style={{ flex: 2, flexDirection: "row" }}>
          <View style={{ flex: 1, alignSelf: "center" }}>
            <Text>Logo</Text>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 1 }}>
              <Text>From</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>To</Text>
            </View>
          </View>
        </View>

        <View style={styles.doubleInput}>
          <View style={{ flex: 1 }}>
            <Text>Money</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Seats</Text>
          </View>
        </View>

        <View style={styles.doubleInput}>
          <View style={{ flex: 1 }}>
            <Text>Model</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Color</Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text>License Plate</Text>
        </View>

        <View style={{ flex: 2 }}>
          <Text>Extra Notes</Text>
        </View>
      </View>
      <View style={{ width: "80%" }}>
        <TouchableOpacity style={styles.submit}>
          <Text style={{ fontSize: 20, alignItems: "center", color: "white" }}>
            POST RIDE
          </Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 30,
    margin: 15,
  },
  background: {
    height: "55%",
    width: "80%",
    backgroundColor: "lightgray",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 10,
  },
  doubleInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  submit: {
    padding: 20,
    backgroundColor: "green",
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
