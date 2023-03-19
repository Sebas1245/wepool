import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import Theme from '../core/Colors'

type btnProps = {
  text: string,
  theme?: string,
  size?: string,
  onPress?: (params?: any) => any;
}

export default ({ onPress, text, size, theme }: btnProps) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
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
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#ffc107",
  },
});