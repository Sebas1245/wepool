import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useThemeColors } from "../hooks/useThemeColors";

type btnProps = {
  text: string,
  onPress?: (params?: any) => any,
  style?: any,
  textStyle?: any,
  props?: any
}

export const Button =  ({ onPress, text, style, textStyle, props}: btnProps) => {
  const { colors } = useThemeColors();

  const buttonColor = colors.colors.primary
  const textColor = colors.buttonText

  return (
    <TouchableOpacity onPress={onPress} style={style ? style: [styles.button, {backgroundColor: buttonColor}]}>
      <Text style={textStyle ? textStyle : [styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 2;

const styles = StyleSheet.create({
  button: {
    // flex: 1, 
    width: buttonWidth,
    height: Math.floor(buttonWidth * 0.2 ),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 5,
  },
  text: {
    fontSize: 24,
  },
});