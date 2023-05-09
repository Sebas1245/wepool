// Packages
import { StyleSheet, View, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "../../../components/Button";
// Hooks
import { useThemeColors } from "../../../hooks/useThemeColors";
// Queries
import { useMutation, useQuery } from "@apollo/client";
import GetUser, {
  UPDATE_ONE_USER,
  buildUpdateOneUserVariables,
} from "../../../queries/GET/UserQueries";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthContext";

export const Profile = () => {
  const { colors } = useThemeColors();
  const context = useContext(AuthContext);
  const backgroundColor = colors.colors.primary;
  /**
   * TODO:
   * - Update GetUser query to get the context User info
   */
  /**
   * When using useQuery hook you can get loading status, error info, and data
   * See more: https://www.apollographql.com/docs/react/data/queries/
   */
  // Getting query data
  const { loading, error, data } = useQuery(GetUser, {
    variables: {
      where: { id: context?.authenticatedUser?.id },
    },
  });
  const [updateUserMutation, { loading: mutationLoading }] =
    useMutation(UPDATE_ONE_USER);
  const [isEditing, setIsEditing] = useState(false);

  const verifyCarData = (): {
    brand: string;
    model: string;
    year: number;
    color: string;
    plateNumber: string;
  } | undefined => {
    if (
      editCarBrand !== "" &&
      editCarModel !== "" &&
      editCarYear === null &&
      editCarColor !== "" &&
      editCarPlateNumber !== ""
    ) return undefined;
    return {
        brand: editCarBrand,
        model: editCarModel,
        year: editCarYear ?? 0,
        color: editCarColor,
        plateNumber: editCarPlateNumber
    }
  };

  const handleSaveProfile = async () => {
    // trigger mutation to edit user profile
    if (context && context.authenticatedUser) {
      const mutationResult = await updateUserMutation({
        variables: buildUpdateOneUserVariables(
          !userHasCar,
          context.authenticatedUser.id,
          editPhoneNumber,
          verifyCarData()
        ),
      });
      if (mutationResult.errors) {
        alert(mutationResult.errors);
      }
      if (mutationResult.data && mutationResult.data.updateOneUser) {
        if (mutationResult.data.updateOneUser.car) {
            setUserHasCar(true);
        } else {
            setUserHasCar(false);
        }
        setIsEditing(false);
      }
    }
  };
  const [editPhoneNumber, setEditPhoneNumber] = useState<string>("");
  const [editCarBrand, setEditCarBrand] = useState<string>("");
  const [editCarModel, setEditCarModel] = useState<string>("");
  const [editCarYear, setEditCarYear] = useState<number | null>(null);
  const [editCarColor, setEditCarColor] = useState<string>("");
  const [editCarPlateNumber, setEditCarPlateNumber] = useState<string>("");
  const [userHasCar, setUserHasCar] = useState(false);
  useEffect(() => {
    if (data && data.getUser) {
      setEditPhoneNumber(data.getUser.phoneNumber);
      if (data.getUser.car) {
        setUserHasCar(true);
        setEditCarBrand(data.getUser.car.brand);
        setEditCarModel(data.getUser.car.model);
        setEditCarYear(data.getUser.car.year);
        setEditCarColor(data.getUser.car.color);
        setEditCarPlateNumber(data.getUser.car.plateNumber);
      }
    }
  }, [data]);
  if (error) console.log([JSON.stringify({ data }), error, error.networkError]);
  if (loading || error) {
    console.log("Loading...");
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    /** borderWidth: 0, when changed to 1 is used to see graphical structure */
    <View style={[{ backgroundColor: backgroundColor }, styles.container]}>
      <View style={{ flex: 1, borderWidth: 0 }}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1, flexDirection: "row", borderWidth: 0 }}>
          <View
            style={[{ flex: 1, justifyContent: "flex-end", borderWidth: 0 }]}
          >
            <View style={{ flex: 1, borderWidth: 0 }}></View>
            <View
              style={{
                flex: 1,
                borderTopLeftRadius: 50,
                backgroundColor: "white",
              }}
            ></View>
          </View>
          <View
            style={[{ flex: 1, justifyContent: "flex-end", borderWidth: 0 }]}
          >
            <View style={{ flex: 1, borderWidth: 0 }}></View>
            <View style={{ flex: 1, backgroundColor: "white" }}></View>
            <View style={[{ borderWidth: 0 }, styles.absoluteCentered]}>
              <FontAwesome
                style={styles.profilePic}
                name="user-circle-o"
                size={100}
                color="black"
              />
            </View>
          </View>
          <View
            style={[{ flex: 1, justifyContent: "flex-end", borderWidth: 0 }]}
          >
            <View style={{ flex: 1, borderWidth: 0 }}></View>
            <View
              style={{
                flex: 1,
                borderTopRightRadius: 50,
                backgroundColor: "white",
              }}
            ></View>
          </View>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <View style={[{ flex: 1 }]}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ flex: 1, marginTop: 10, alignSelf: "center" }}>
                <Text style={styles.text}>
                  {" "}
                  {data
                    ? ` ${data.getUser.fname} ${data.getUser.lname}`
                    : "USER NAME"}{" "}
                </Text>
                <View
                  style={{
                    flex: 0,
                    alignSelf: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.text}>
                    {" "}
                    {data.getUser.rating ?? "N/A"}{" "}
                  </Text>
                  <FontAwesome name="star" size={30} color={"black"} />
                </View>
              </View>
              <View style={{ flex: 0.5 }}>
                <View style={styles.fieldRowView}>
                  <FontAwesome name="phone" size={40} color="black" />
                  {isEditing ? (
                    <TextInput
                      style={styles.textInput}
                      placeholder={data.getUser.phoneNumber ?? "N/A"}
                      value={editPhoneNumber}
                      returnKeyType="done"
                      onChangeText={(newPhoneNumber) =>
                        setEditPhoneNumber(newPhoneNumber)
                      }
                    />
                  ) : (
                    <Text style={styles.text}>
                      {" "}
                      {data.getUser.phoneNumber ?? "N/A"}{" "}
                    </Text>
                  )}
                </View>
              </View>
              <View style={{ flex: 0.5 }}>
                <View style={styles.fieldRowView}>
                  <FontAwesome
                    name="envelope"
                    size={40}
                    color="black"
                    style={styles.iconStyle}
                  />
                  <Text style={styles.text}>
                    {" "}
                    {data.getUser.email ?? "N/A"}{" "}
                  </Text>
                </View>
              </View>
              <View style={{ flex: 0.5 }}>
                <View style={styles.fieldRowView}>
                  <FontAwesome
                    name="map-pin"
                    size={40}
                    color="black"
                    style={styles.iconStyle}
                  />

                  <Text style={styles.text}>
                    {" "}
                    {data.getUser.street
                      ? data.getUser.street + " " + data.getUser.number
                      : "N/A"}
                  </Text>
                </View>
              </View>
              <View style={{ flex: 0.5 }}>
                <View style={styles.fieldRowView}>
                  <FontAwesome
                    name="car"
                    size={40}
                    color="black"
                    style={styles.iconStyle}
                  />
                  {isEditing ? (
                    <>
                      <TextInput
                        style={styles.textInputSmaller}
                        placeholder={data.getUser.car ? `${data.getUser.car.brand}` : 'BRAND'}
                        value={editCarBrand}
                        returnKeyType="done"
                        onChangeText={(newCarInfo) =>
                          setEditCarBrand(newCarInfo)
                        }
                      />
                      <TextInput
                        style={styles.textInputSmaller}
                        placeholder={data.getUser.car ? `${data.getUser.car.model}` : "MODEL"}
                        value={editCarModel}
                        returnKeyType="done"
                        onChangeText={(newCarInfo) =>
                          setEditCarModel(newCarInfo)
                        }
                      />
                      <TextInput
                        keyboardType="number-pad"
                        style={[styles.textInputSmaller, { width: 85 }]}
                        placeholder={data.getUser.car ? `${data.getUser.car.year}` : new Date().getFullYear().toString()}
                        value={editCarYear ? editCarYear.toString() : ""}
                        returnKeyType="done"
                        onChangeText={(newYear) =>
                          setEditCarYear(parseInt(newYear))
                        }
                        maxLength={4}
                      />
                    </>
                  ) : (
                    <Text style={styles.text}>
                      {" "}
                      {data && data.getUser.car
                        ? `${data.getUser.car.brand} ${data.getUser.car.model} ${data.getUser.car.year}`
                        : "N/A"}{" "}
                    </Text>
                  )}
                </View>
              </View>
              <View style={{ flex: 0.5 }}>
                <View style={styles.fieldRowView}>
                  <FontAwesome
                    name="paint-brush"
                    size={40}
                    color="black"
                    style={styles.iconStyle}
                  />
                  {isEditing ? (
                    <TextInput
                      style={styles.textInput}
                      placeholder={data.getUser.car ? `${data.getUser.car.color}` : "N/A"}
                      value={editCarColor}
                      onChangeText={(newColor) => setEditCarColor(newColor)}
                      returnKeyType="done"
                    />
                  ) : (
                    <Text style={styles.text}>
                      {" "}
                      {data && data.getUser.car
                        ? `${data.getUser.car.color}`
                        : "N/A"}{" "}
                    </Text>
                  )}
                </View>
              </View>
              <View style={{ flex: 0.5 }}>
                <View style={styles.fieldRowView}>
                  <FontAwesome
                    name="drivers-license"
                    size={40}
                    color="black"
                    style={styles.iconStyle}
                  />
                  {isEditing ? (
                    <TextInput
                      style={styles.textInput}
                      placeholder={
                        data.getUser.car ? `${data.getUser.car.plateNumber}` : "N/A"
                      }
                      value={editCarPlateNumber}
                      onChangeText={(newPlateNumber) =>
                        setEditCarPlateNumber(newPlateNumber)
                      }
                      returnKeyType="done"
                    />
                  ) : (
                    <Text style={styles.text}>
                      {" "}
                      {data && data.getUser.car
                        ? `${data.getUser.car.plateNumber}`
                        : "N/A"}{" "}
                    </Text>
                  )}
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexGrow: 1,
                  flexDirection: "row",
                  marginBottom: 40,
                  paddingVertical: 15,
                }}
              >
                {isEditing ? (
                  <Button
                    text="Save Profile"
                    style={[styles.button, { backgroundColor: "green" }]}
                    textStyle={styles.buttonText}
                    onPress={handleSaveProfile}
                  />
                ) : (
                  <Button
                    text="Edit Profile"
                    style={[styles.button, { backgroundColor }]}
                    textStyle={styles.buttonText}
                    onPress={() => setIsEditing(true)}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topOfContentBox: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderWidth: 1,
  },
  absoluteCentered: {
    position: "absolute",
    left: "50%",
  },
  profilePic: {
    borderRadius: 100,
    padding: 10,
    backgroundColor: "white",
    position: "relative",
    left: "-50%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    paddingHorizontal: 35,
    alignItems: "flex-start",
  },
  text: {
    fontSize: 25,
  },
  iconStyle: {
    marginRight: 5,
  },
  button: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
  },
  textInput: {
    fontSize: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    paddingVertical: 5,
    paddingLeft: 10,
    borderRadius: 100,
  },
  textInputSmaller: {
    fontSize: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    width: 100,
    paddingVertical: 5,
    paddingLeft: 10,
    borderRadius: 100,
    marginHorizontal: 2,
  },
  fieldRowView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
