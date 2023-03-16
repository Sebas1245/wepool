import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreens/StartScreen';
import LoginScreen from './src/screens/StartScreens/LoginScreen';
import { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StartScreen">
            <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown: false}} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
            <StatusBar style="auto" />
          </Stack.Navigator>
          {/* <View style={styles.container}>
            <StartScreen/>
            <LoginScreen/>
          </View> */}
        
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
