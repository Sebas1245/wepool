// From Packages
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from "react-native";
import { Divider } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";
import SelectDropdown from "react-native-select-dropdown";
// Navigation

// Components
import { StartingPoint } from "../services/enums";
import { AuthContext } from "../AuthContext";

type Props = {
    selectedRide: Ride | null,
    handleUpdateRide: (getISODateString: string, startsAt: StartingPoint, availableSeats: number) => Promise<void>,
    driverCar?: Car,

}

export const RidesForm = ({selectedRide, handleUpdateRide, driverCar}: Props) => {
    
    /** Get Driver info */
    const context = useContext(AuthContext)

    /** Variables and functions*/
    const today = new Date();
    const startDate = getFormatedDate(
        new Date(today.setDate(today.getDate() + 1)),
        "YYYY/MM/DD"
    );
    
    /** 
     * DATE property is db saved as a single JS Date ISO String, 
     *  which contains Date (at 0 UTC offset (-6 hrs Mex)) and also Time
     * At render, we get the date as Date && string, and time as string (00:00) for UI purposes
     * When sent to db we join date and time, and convert it to ISO string again.
     */
    const [openDate, setOpenDate] = useState(false); //open and close date modal
    const [date, setDate] = useState<Date>(today); //date 
    const [dateString, setDateString] = useState("DATE"); //date string

    const [openTime, setOpenTime] = useState(false); //open and close time modal
    const [timeString, setTime] = useState("TIME"); //time

    function handleOnPressDate() {
        setOpenDate(!openDate);
    }

    function handleOnPressTime() {
        setOpenTime(!openTime);
    }

    function handleChangeDate(propDate: string): void {
        const correctedDate: Date = convertToDate(propDate);
        const date: Date = new Date(correctedDate);   //This is unnecesary
        const formattedDate = formatDate(date)
        setDate(correctedDate)
        setDateString(formattedDate)
    }

    function convertToDate(dateString: string): Date {
        const dateParts: string[] = dateString.split("/");
        const year: number = parseInt(dateParts[0], 10);
        const month: number = parseInt(dateParts[1], 10) - 1; // Month is zero-indexed
        const day: number = parseInt(dateParts[2], 10);
        const date: Date = new Date(year, month, day);
        return date;
    }

    function formatDate(date: Date): string {
        return date.toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        });
    }

    function formatTime(hours: number, min: number): string {
        if (min === 0)
        return `${hours}:00`;
        else if (min / 10 < 1)
        return `${hours}:0${min}`
        return `${hours}:${min}`
    }

    function getISODateString(): string {
        const time: string[] = timeString.split(":");
        const hours = parseInt(time[0])
        const min = parseInt(time[1])
        // console.log(time, hours, min)
        date.setMinutes(min)
        date.setHours(hours)
        return date.toISOString()
    }

    function handleChangeTime(propTime: string): void {
        setTime(propTime);
        setOpenTime(!openTime);
    }

    // Ride Form Variables
    const [from, setFrom] = useState<string>();
    const [to, setTo] = useState<string>();
    const [money, setMoney] = useState<string>();
    const [seats, setSeats] = useState<string>('');
    const [model, setModel] = useState<string>();
    const [color, setColor] = useState<string>();
    const [licensePlate, setLicensePlate] = useState<string>();
    const [extraNotes, setExtraNotes] = useState<string>();
    const [startsAt, setStartsAt] = useState<StartingPoint>(StartingPoint.DRIVER);
      /** Initialize values */

    //Initialize selected ride data to fetch on form
    useEffect(() => {
        if (selectedRide && selectedRide.driver.car) {
            setStartsAt(selectedRide.startsAt)
            setSeats(selectedRide.availableSeats.toString())
            const car = selectedRide.driver.car
            setModel(car.model)
            setColor(car.color)
            setLicensePlate(car.plateNumber)
            // setMoney()
            // setExtraNotes()
            const start_loc =
            selectedRide.startsAt === StartingPoint.DRIVER
            ? selectedRide.driver?.street
            : selectedRide.driver?.company.street;
            const final_loc =
            selectedRide.startsAt === StartingPoint.DRIVER
            ? selectedRide.driver?.company.street
            : selectedRide.driver?.street;
            setFrom(start_loc)
            setTo(final_loc)
            const getDate = new Date(selectedRide?.date) //selectedRide.date = ISO date string
            const hours = getDate.getHours()
            const min = getDate.getMinutes()
            console.log(`${getDate} || ${formatDate(getDate)} || ${formatTime(hours, min)} ||`)
            setDate(getDate)
            setDateString(formatDate(getDate))
            setTime(formatTime(hours, min))
        }
    }, []);
    return (
        <View style={{flex: 1}}>
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
                        <Text style={styles.text}>{dateString}</Text>
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
                        <Text style={styles.text}>{timeString}</Text>
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
                        flex: 0.5,
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                    <Ionicons name="location-outline" size={80} color="black" />
                    </View>
                    <Divider orientation="vertical" />
                    <View style={{
                        flex: 1.5,
                        alignItems: "flex-start",
                        justifyContent: "center",
                        }}
                    >
                        <View style={{paddingLeft: 10}}>
                            <Text>START FROM:</Text>
                            
                            <SelectDropdown
                            buttonStyle={{ width: "100%", backgroundColor: "lightgray" }}
                            data={["DRIVER'S HOME", "COMPANY"]}
                            defaultValueByIndex={0}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                                // console.log(startsAt, startsAt.toString(), StartingPoint.DRIVER.toString(), startsAt === StartingPoint.DRIVER)
                                if (index === 0 && startsAt === StartingPoint.COMPANY) {
                                    setStartsAt(StartingPoint.DRIVER);
                                    let change = to
                                    setTo(from);
                                    setFrom(change);

                                } else if (index === 1 && startsAt === StartingPoint.DRIVER) {
                                    setStartsAt(StartingPoint.COMPANY);
                                    let change = to
                                    setTo(from);
                                    setFrom(change);
                                }
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item;
                            }}
                            />
                        </View>
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
                        editable = {false}
                        placeholder="FROM"
                        value={from}
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
                        editable = {false}
                        placeholder="TO"
                        value={to}
                        returnKeyType="done"
                        onChangeText={(toText) => setTo(toText)}
                        />
                    </View>
                    </View>
                </View>

                <Divider></Divider>

                <View style={styles.doubleInput}>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                    <View
                        style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    >
                        <MaterialIcons name="attach-money" size={40} color="black" />
                    </View>
                    <View
                        style={{
                        flex: 3,
                        justifyContent: "center",
                        marginLeft: 10,
                        }}
                    >
                        <TextInput
                        style={[styles.text, styles.uneditable]}
                        editable = {false}
                        placeholder="MONEY"
                        value={money}
                        returnKeyType="done"
                        keyboardType="number-pad"
                        onChangeText={(moneyText) => setMoney(moneyText)}
                        />
                    </View>
                    </View>
                    <Divider orientation="vertical" />
                    <View style={{ flexDirection: "row", flex: 1 }}>
                    <View
                        style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    >
                        <MaterialCommunityIcons
                        name="seat-passenger"
                        size={40}
                        color="black"
                        />
                    </View>
                    <View
                        style={{
                        flex: 3,
                        justifyContent: "center",
                        marginLeft: 10,
                        }}
                    >
                        <TextInput
                        style={styles.text}
                        placeholder="SEATS"
                        value={seats}
                        returnKeyType="done"
                        keyboardType="number-pad"
                        onChangeText={(seatsText) => setSeats(seatsText)}
                        />
                    </View>
                    </View>
                </View>

                <Divider></Divider>

                {/* <View style={styles.doubleInput}>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                    <View
                        style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    >
                        <Ionicons name="car" size={40} color="black" />
                    </View>
                    <View
                        style={{
                        flex: 3,
                        marginLeft: 10,
                        justifyContent: "center",
                        }}
                    >
                        <TextInput
                        style={[styles.text, styles.uneditable]}
                        editable = {false}
                        placeholder="MODEL"
                        value={model}
                        returnKeyType="done"
                        onChangeText={(modelText) => setModel(modelText)}
                        />
                    </View>
                    </View>
                    <Divider orientation="vertical" />
                    <View style={{ flexDirection: "row", flex: 1 }}>
                    <View
                        style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    >
                        <Ionicons name="color-palette-sharp" size={40} color="black" />
                    </View>
                    <View
                        style={{
                        flex: 3,
                        marginLeft: 10,
                        justifyContent: "center",
                        }}
                    >
                        <TextInput
                        style={[styles.text, styles.uneditable]}
                        editable = {false}
                        placeholder="COLOR"
                        value={color}
                        returnKeyType="done"
                        onChangeText={(colorText) => setColor(colorText)}
                        />
                    </View>
                    </View>
                </View> */}

                <Divider></Divider>

                <View style={{paddingLeft: 10}}>
                    <Text>SELECT CAR:</Text>
                    <SelectDropdown
                        buttonStyle={{ width: "100%", backgroundColor: "lightgray" }}
                        data={[driverCar ? `${driverCar.brand} ${driverCar.model} ${driverCar.year}` : "N/A"]}
                        defaultValueByIndex={0}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                            // console.log(startsAt, startsAt.toString(), StartingPoint.DRIVER.toString(), startsAt === StartingPoint.DRIVER)
                            if (index === 0 && startsAt === StartingPoint.COMPANY) {
                                setStartsAt(StartingPoint.DRIVER);
                                let change = to
                                setTo(from);
                                setFrom(change);

                            } else if (index === 1 && startsAt === StartingPoint.DRIVER) {
                                setStartsAt(StartingPoint.COMPANY);
                                let change = to
                                setTo(from);
                                setFrom(change);
                            }
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                </View>

                {/* <View
                    style={{
                    flexDirection: "row",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    }}
                >
                    <View style={{ flex: 1, justifyContent: "center" }}>
                    <Image
                        style={{ width: 45, height: 45 }}
                        source={require("../assets/img/license_plate.png")}
                    />
                    </View>
                    <View style={{ flex: 4 }}>
                    <TextInput
                        style={[styles.text, styles.uneditable]}
                        editable = {false}
                        placeholder="LICENSE PLATE"
                        value={licensePlate}
                        returnKeyType="done"
                        onChangeText={(licensePlateText) =>
                        setLicensePlate(licensePlateText)
                        }
                    />
                    </View>
                </View> */}

                <Divider></Divider>

                <View style={{ flex: 2 }}>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                    <View
                        style={{
                        flex: 1,
                        alignItems: "center",
                        }}
                    >
                        <MaterialIcons name="notes" size={40} color="black" />
                    </View>
                    <View style={{ flex: 4 }}>
                        <TextInput
                        numberOfLines={4}
                        maxLength={100}
                        style={[styles.text, styles.uneditable]}
                        editable = {false}
                        returnKeyType="done"
                        placeholder="EXTRA NOTES"
                        value={extraNotes}
                        onChangeText={(notesText) => setExtraNotes(notesText)}
                        />
                    </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <TouchableOpacity 
                    style={styles.submit}
                    onPress={() => handleUpdateRide(getISODateString(), startsAt, parseInt(seats))}>
                    <Text
                        style={{ fontSize: 20, alignItems: "center", color: "white" }}
                    >
                        SAVE CHANGES
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
    backButton: {
      height: 100,
      width: "100%",
      alignItems: "flex-start",
      paddingTop: 5,
      paddingHorizontal: 25,
    },
    contentContainer: {
      flex: 4,
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
    //   height: "55%",
    //   width: "80%",
      flex: 3,
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
    uneditable:{
        color: "gray",
        // backgroundColor: 'white',
    }
  });