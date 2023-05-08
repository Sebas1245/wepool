import {Logo} from "./Logo"
// import Text from "./Text"
import { StyleSheet, View, Image, Text } from 'react-native'
import Colors from "../core/Colors"


export const HeaderBar = () => {
    return (
        <View style = {styles.container}>
            <Logo style={styles.logo}/>
            <View style = {{flex:5}}></View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    logo: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        marginLeft: '5%',
    }, 
    logoContainer: {
        flex: 1,
        alignItems:"flex-start",
        marginTop: '10%',
    }, 
    text: {
        fontSize: 22,
        color: Colors.light.text,
        paddingVertical: 12,
    },


})