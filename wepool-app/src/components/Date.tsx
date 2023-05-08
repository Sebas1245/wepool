import Moment from "react-moment";
import { Text, View } from "react-native";

export const Date = ({ date }: { date: string }) => {
  return (
    <Moment element={Text} format="DD/MM/YYYY HH:mm" locale="mx">
      {date}
    </Moment>
  );
};

export const DateTime = ({ date }: { date: string }) => {
  return (
    <View>
      <Text style={{fontSize: 25, marginRight: 5}}>
        <Moment element={Text} format="HH:mm" locale="mx">
          {date}
        </Moment>
      </Text>
      <Text style={{fontSize: 25, marginRight: 5}}>
        <Moment element={Text} format="DD/MM/YYYY" locale="mx">
          {date}
        </Moment>
      </Text>
    </View>
  );
};
