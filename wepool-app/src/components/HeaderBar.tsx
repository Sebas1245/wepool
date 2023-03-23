import Logo from "./Logo"
// import Text from "./Text"
import { Dimensions, StyleSheet, View, Image, Text } from 'react-native'
import Colors from "../core/Colors"

type Props = {
    user: string, 
    userType: "Rider" | "Driver",
}

const screen = Dimensions.get('window')
const logoWidth = (screen.width * 0.9)

const icons = {
    driver : {
        uri : require('../assets/icons/icon_Driver.png')
    },
    rider : {
        uri : require('../assets/icons/icon_Rider.png')
    }
}

export default function HeaderBar({user, userType = 'Rider'}: Props) {
    let iconPath = icons.rider.uri
    if (userType === 'Driver') {
        iconPath = icons.driver.uri
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.iconContainer}>
                <Image
                                style={styles.icon}
                                source={iconPath}
                                />
                <Text>{userType}</Text>
            </View>
            <View style = {styles.logoContainer}>
                <Logo style={styles.logo}/>
            </View>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black', 
        borderWidth: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    icon: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginLeft: '5%',
    }, 
    iconContainer: {
        flex: 2,
        flexDirection: "row",
        alignItems: 'center',
        marginTop: '10%',
    },
    logo: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        marginLeft: '5%',
    }, 
    logoContainer: {
        flex: 1,
        borderLeftColor: 'black', 
        borderLeftWidth: 2,
        marginTop: '10%',
    }, 
    text: {
        fontSize: 22,
        color: Colors.light.colors.text,
        paddingVertical: 12,
    },


})