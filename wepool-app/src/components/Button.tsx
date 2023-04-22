import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";
import React from "react";

type btnProps = {
  text: string;
  onPress?: (params?: any) => any;
  style?: any;
  textStyle?: any;
  props?: any;
};

type ImageButtonProps = {
  Image: React.ElementType;
  onPress?: (params?: any) => any;
};

export const Button = ({
  onPress,
  text,
  style,
  textStyle,
  props,
}: btnProps) => {
  const { colors } = useThemeColors();

  const buttonColor = colors.colors.primary;
  const textColor = colors.buttonText;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={style ? style : [styles.button, { backgroundColor: buttonColor }]}
      {...props}
    >
      <Text style={textStyle ? textStyle : [styles.text, { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const ImageButton = ({
  Image,
  onPress,
}: ImageButtonProps) => {
  const { colors } = useThemeColors();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableArea} activeOpacity={0.5} onPress={onPress}>
        <Image style={styles.buttonImageIconStyle} />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
      </TouchableOpacity>
    </View>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 2;

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    width: buttonWidth,
    height: Math.floor(buttonWidth * 0.2),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 5,
  },
  text: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  touchableArea: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
  buttonTextStyle: {
    color: "#0f0f0f",
    marginBottom: 4,
    marginLeft: 10,
  },
});
