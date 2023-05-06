import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import { useColorScheme } from './src/hooks/useColorScheme';
import Navigation from './src/navigation'

/**
 * TODO: 
 * - Server connection is only working on web expo app when connecting to `http://localhost:3000/dev/graphql`. Not working on Expo mobile apps
 * - When error solved, delete unnecesary comments and code lines
 */

/**
 * According to Docs, we use ApolloClient to point to graphql server, and cache option to cache query results (seems obligatory)
 * Later, to connect the Client with react we use ApolloProvider
 * When encountering errors, several blogs show the error is on the client URI direction
 */
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from '@apollo/client';
/**
 * When installing the apollo packages, node finds several dependency conflicts between packages. 
 * I understand is because of some packages that depend on other packages, but new modules also are involved with these packages, and they have conflicts with the dependency tree. But maybe I'm just a dumbass
 * I found also that some of packages are already installed and others don't. 
 * This package dependency errors can be temporally omitted by running 'npm install <package> --legacy-peer-deps'. 
 * !!! It can be the true problem of this not working !!!!
 */

/** Some blogs recommended use of these technologies to solve the connection errors */
// import {createHttpLink} from 'apollo-link-http';
import { NetworkInfo } from 'react-native-network-info';

/** Some blogs recommended using the Expo device IP Address, which didn't make sense */
// const DEVICE_IP_ADDRESS = NetworkInfo.getIPAddress();

/** Several blogs recommended to substitute 'localhost' with the local IP address */
const IP_LOCAL_ADDRESS = '192.168.1.74';

/** Also tried using the Expo Metro app address, which dind't make sense also jeje */
// const EXPO_METRO_ADDRESS = '192.168.1.74:19000'

/** I tried several addresses:
 * `http://localhost:3000/dev/graphql`
 * `http://localhost:3000/graphql`
 * `http://localhost:3000/`
 * `http://${IP_LOCAL_ADDRESS}:3000/dev/graphql` (graphql server endpoint)
 * `ws://localhost:4000/` (graphql server subscriptions endpoint)
 */

/**
 * ADVICE: Run in Expo web browser, it allows you to use chromeTools to see network errors
 */

// Initialize Apollo Client
const client = new ApolloClient({
  uri: `http://localhost:3000/dev/graphql`,
  cache: new InMemoryCache()
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar style="auto" />    
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
