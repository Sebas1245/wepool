import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { Divider } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { HeaderBar } from "../../../components/HeaderBar";
import { RootTabScreenProps } from "../../../navigation/types";

export const SearchRide = ({
  navigation,
}: RootTabScreenProps<"SearchRide">) => {
  const today = new Date();
  const startDate = getFormatedDate(
    new Date(today.setDate(today.getDate() + 1)),
    "YYYY/MM/DD"
  );

  const [openDate, setOpenDate] = useState(false); //open and close date modal
  const [date, setDate] = useState("DATE"); //date

  const [openTime, setOpenTime] = useState(false); //open and close time modal
  const [time, setTime] = useState("TIME"); //date

  function handleOnPressDate() {
    setOpenDate(!openDate);
  }

  function handleOnPressTime() {
    setOpenTime(!openTime);
  }

  function handleChangeDate(propDate: string): void {
    const correctedDate: Date = convertToDate(propDate);
    const date: Date = new Date(correctedDate);
    const formattedDate: string = date.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
    });
    setDate(formattedDate);
  }

  function convertToDate(dateString: string): Date {
    const dateParts: string[] = dateString.split("/");
    const year: number = parseInt(dateParts[0], 10);
    const month: number = parseInt(dateParts[1], 10) - 1; // Month is zero-indexed
    const day: number = parseInt(dateParts[2], 10);
    const date: Date = new Date(year, month, day);
    return date;
  }

  function handleChangeTime(propTime: string): void {
    setTime(propTime);
    setOpenTime(!openTime);
  }

  // Ride Form Variables

  const [from, setFrom] = useState<string | undefined>();
  const [to, setTo] = useState<string | undefined>();

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <HeaderBar/>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>LOOK FOR A RIDE</Text>
        <View style={styles.background}>
          <View style={styles.doubleInput}>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="calendar-o" size={40} color="black" />
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <TouchableOpacity onPress={handleOnPressDate}>
                  <Text style={styles.text}>{date}</Text>
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={openDate}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode="calendar"
                        minimumDate={startDate}
                        selected="date"
                        onDateChange={handleChangeDate}
                      />
                      <TouchableOpacity onPress={handleOnPressDate}>
                        <Text>CLOSE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            <Divider orientation="vertical" />
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="clock-o" size={40} color="black" />
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <TouchableOpacity onPress={handleOnPressTime}>
                  <Text style={styles.text}>{time}</Text>
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={openTime}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode="time"
                        selected="time"
                        onTimeChange={handleChangeTime}
                      />
                      <TouchableOpacity onPress={handleOnPressTime}>
                        <Text>CLOSE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>

          <Divider></Divider>

          <View style={{ flex: 2, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="location-outline" size={80} color="black" />
            </View>
            <Divider orientation="vertical" />
            <View style={{ flex: 2 }}>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <TextInput
                  style={styles.text}
                  placeholder="FROM"
                  returnKeyType="done"
                  onChangeText={(fromText) => setFrom(fromText)}
                />
              </View>
              <Divider></Divider>
              <View
                style={{
                  flex: 1,
                  alignItems: "flex-start",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                <TextInput
                  style={styles.text}
                  placeholder="TO"
                  returnKeyType="done"
                  onChangeText={(toText) => setTo(toText)}
                />
              </View>
            </View>
          </View>

          <Divider></Divider>
        </View>
        <View style={{ width: "80%" }}>
          <TouchableOpacity
            style={styles.search}
            onPress={() => navigation.navigate("MatchedDrivers")}
          >
            {/* onPress={onPressRide}> */}
            <Text
              style={{ fontSize: 20, alignItems: "center", color: "white" }}
            >
              SEARCH RIDE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    margin: 15,
  },
  text: {
    fontSize: 25,
  },
  contentContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginHorizontal: 10,
  },
  background: {
    height: "25%",
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
  search: {
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
