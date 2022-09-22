/**
 * Tiger Hall Content React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Home from './src/screens/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SplashScreen from 'react-native-splash-screen'

const client = new ApolloClient({
  uri: 'https://api.staging.tigerhall.io/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  
  useEffect(()=>{
    SplashScreen.hide()
  }, [])

  return (
    <ApolloProvider client={client}>
    <SafeAreaView>
      <Home/>
    </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
