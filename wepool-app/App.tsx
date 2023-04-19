import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useCachedResources from './src/hooks/useCachedResources';
import { useColorScheme } from './src/hooks/useColorScheme';
import Navigation from './src/navigation'
import { AppRegistry } from 'react-native';
import { ApolloClient, ApolloProvider } from '@apollo/client';

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto" />    
      </SafeAreaProvider>
    );
  }
}
