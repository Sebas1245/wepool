import HeaderBar from "../components/HeaderBar";
import { Dimensions, TouchableOpacity, StyleSheet, View, SafeAreaView, Image } from 'react-native'
import Text from '../components/Text'
import Logo from '../components/Logo'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { RootStackScreenProps } from '../navigation/types';
import Colors from '../core/Colors'
import Header from "../components/Header";

const screen = Dimensions.get('window')

export default function RideDetails({navigation}: RootStackScreenProps<'RideDetails'>) {

    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <HeaderBar user="Berns" userType="Rider"/>
            </View>
            <View style = {styles.contentContainer}>
                <Header text="Ride Details"/>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: screen.height
    },
    headerContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 5,
    },
    btnContainer: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: '10%',
    },
    iconColumnDriver: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: Colors.light.colors.primary,
        width: screen.width * 0.5,
        height: screen.width * 0.5,

    },
    iconColumnRider: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: Colors.light.colors.secondary,
        width: screen.width * 0.5,
        height: screen.width * 0.5,

    },
    icon: {
        width: 35, 
        height: 35,
    }


})