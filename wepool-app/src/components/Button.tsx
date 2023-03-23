import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import Theme from '../core/Colors'

type btnProps = {
  text: string,
  onPress?: (params?: any) => any,
  style?: any,
  textStyle?: any,
  props?: any
}

export default ({ onPress, text, style, textStyle, props}: btnProps) => {

  return (
    <TouchableOpacity onPress={onPress} style={style ? style: styles.button}>
      <Text style={textStyle ? textStyle : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 2;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.light.colors.primary,
    // flex: 1, 
    width: buttonWidth,
    height: Math.floor(buttonWidth * 0.2 ),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});